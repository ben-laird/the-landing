import { Component, createSignal, For } from "solid-js";
import { createStore } from "solid-js/store";
import { Show } from "solid-js/web";
import { z } from "zod";

const schema = z.object({
  Username: z.string().email(),
  Password: z
    .string()
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "The password must have a minimum of 8 characters, including one letter, one number, and one special character"
    ),
});

type FormValues = z.infer<typeof schema>;

const inputTypes: Record<keyof FormValues, string> = {
  Username: "text",
  Password: "password",
};

const RenderIssues: Component<{ issues: z.ZodIssue[] }> = ({ issues }) => (
  <div class="m-1 justify-center rounded-md border-2 border-red-500 p-1">
    <For each={issues}>
      {({ message, path }) => (
        <div class="mt-1 text-sm text-red-500">
          * {path.reduce((_, curr) => `> ${curr}`)}: {message}
        </div>
      )}
    </For>
  </div>
);

export const Login: Component = () => {
  const [store, setStore] = createStore<FormValues>({
    Username: "",
    Password: "",
  });

  const [issues, setIssues] = createSignal<z.ZodIssue[]>();

  return (
    <div class="flex min-h-screen items-center justify-center bg-gray-100">
      <div class="w-full max-w-md py-8 px-4">
        <h2 class="mb-4 text-3xl font-extrabold text-gray-800">
          Log in to your account
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();

            const results = schema.safeParse(store);
            if (!results.success) setIssues(results.error.issues);
            else {
              setIssues(undefined);
              window.location.href = "/";
            }
          }}
          class="space-y-6"
        >
          <For each={Object.keys(inputTypes) as (keyof typeof inputTypes)[]}>
            {(element) => (
              <div>
                <label
                  for={element}
                  class="mb-2 block font-medium text-gray-700"
                >
                  {element}
                </label>
                <input
                  type={inputTypes[element]}
                  name={element}
                  id={element}
                  onInput={({ currentTarget: t }) => {
                    setStore([element], t.value);
                  }}
                  class="block w-full rounded-md border-gray-300 p-1 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  required
                />
              </div>
            )}
          </For>

          <div>
            <Show when={issues()} keyed>
              {(issues) => <RenderIssues issues={issues} />}
            </Show>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md border border-transparent bg-blue-500 py-2 px-4 text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
