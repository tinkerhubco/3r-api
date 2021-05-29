import { getHelloHandler } from '../../api-handler/get-hello';

import { apiRouteHandler } from '../../utils/api-route-handler';

const route = {
  get: getHelloHandler,
};
const handler = apiRouteHandler(route);

export default handler;
