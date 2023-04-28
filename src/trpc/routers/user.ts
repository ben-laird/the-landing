import { procedure, router } from "../initTRPC";

export const users = router({
  allUsers: procedure.query(async ({ ctx: { prisma } }) => {
    return await prisma.user.findMany();
  }),
});
