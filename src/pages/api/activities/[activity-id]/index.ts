import { getActivity } from '../../../../api-handler/get-activity';

import { apiRouteHandler } from '../../../../utils/api-route-handler';

const route = {
  get: getActivity,
};
const handler = apiRouteHandler(route);

export default handler;
