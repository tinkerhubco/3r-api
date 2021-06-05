import { getAllUserVouchers } from '../../../../../api-handler/get-all-user-vouchers';
import { apiRouteHandler } from '../../../../../utils/api-route-handler';

const route = {
  get: getAllUserVouchers,
};
const handler = apiRouteHandler(route);

export default handler;
