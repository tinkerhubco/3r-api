import { NextApiHandler } from 'next';

export type ApiRouteHandlerRoutes = Record<string, NextApiHandler>;
export const apiRouteHandler =
  (routes: ApiRouteHandlerRoutes): NextApiHandler =>
  (req, res) => {
    if (!req.method) {
      return res.send('400');
    }

    const routeHandler = routes[req.method.toLowerCase()];

    if (!routeHandler) {
      return res.send('400');
    }

    return routeHandler(req, res);
  };
