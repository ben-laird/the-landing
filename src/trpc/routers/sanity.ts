import { z } from "zod";
import { procedure, router } from "../initTRPC";

export const sanity = router({
  greet: procedure
    .input((unfiltered) => {
      const schema = z.string().min(1);
      return schema.parse(unfiltered);
    })
    .query(({ input: name, ctx: { greetingPhrase } }) => greetingPhrase(name)),
  wishBirthday: procedure
    .input(z.object({ name: z.string().min(1), age: z.number().gt(0) }))
    .query(({ input: { name, age } }) => `Happy ${age}th birthday, ${name}!`),
  debug: procedure.query(({ ctx: { req, resHeaders } }) => {
    console.log("req: ", req);
    console.log("\n\nresHeaders: ", resHeaders);
  }),
});
