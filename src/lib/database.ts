import { mongoDbConnect } from './mongoose-connect';

export const database = {
  connect: mongoDbConnect,
};
