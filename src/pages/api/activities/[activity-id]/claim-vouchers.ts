import { postClaimActivityVouchers } from '../../../../api-handler/post-claim-activity-vouchers';

import { apiRouteHandler } from '../../../../utils/api-route-handler';

const route = {
  post: postClaimActivityVouchers,
};
const handler = apiRouteHandler(route);

export default handler;
