import { getAllRewards } from '../../../api-handler/get-all-rewards';

import { apiRouteHandler } from '../../../utils/api-route-handler';

const route = {
  get: getAllRewards,
};
const handler = apiRouteHandler(route);

export default handler;
