import { getAllActivities } from '../../../api-handler/get-all-activities';

import { apiRouteHandler } from '../../../utils/api-route-handler';

const route = {
  get: getAllActivities,
};
const handler = apiRouteHandler(route);

export default handler;
