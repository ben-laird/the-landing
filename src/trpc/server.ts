import { createContext as ctx, router } from "./initTRPC";
import * as routers from "./routers";

export const appRouter = router({ ...routers });

export type AppRouter = typeof appRouter;

export interface AstroSiphon {
  request: Request;
  response: { headers: Headers };
};

export const trpcServerSide = (astroSiphon: AstroSiphon) => {
  const {
    request: req,
    response: { headers: resHeaders },
  } = astroSiphon;

  return appRouter.createCaller(ctx({ req, resHeaders }));
};
