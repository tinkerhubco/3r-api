import { postJoinActivity } from '../../../../api-handler/post-join-activity';

import { apiRouteHandler } from '../../../../utils/api-route-handler';

const route = {
  post: postJoinActivity,
};
const handler = apiRouteHandler(route);

export default handler;
