import { getUserProfile } from '../../../../api-handler/get-user-profile';

import { apiRouteHandler } from '../../../../utils/api-route-handler';

const route = {
  get: getUserProfile,
};
const handler = apiRouteHandler(route);

export default handler;
