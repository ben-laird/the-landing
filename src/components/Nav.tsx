import { Component, For } from "solid-js";
import { ThemeToggle } from "./ThemeToggle";

export interface Link {
  name: string;
  href: string;
}

export const Nav: Component<{ links: Link[] }> = (props) => (
  <nav class="sticky top-0 bg-white px-4 py-2 shadow-sm">
    <div class="mx-auto flex max-w-screen-xl items-center justify-between">
      <a href="/" class="text-lg font-semibold text-gray-700">
        Club Name
      </a>
      <ul class="flex space-x-4">
        <For each={props.links}>
          {({ href, name }) => (
            <li class="flex items-center justify-center">
              <a href={href} class="text-gray-700 hover:text-gray-800">
                {name}
              </a>
            </li>
          )}
        </For>
        <ThemeToggle />
      </ul>
    </div>
  </nav>
);
