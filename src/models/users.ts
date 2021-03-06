import mongoose from 'mongoose';

import { VouchersSchema } from './vouchers';

const schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    default: 0
  },
  avatarUrl: {
    type: String,
    default: 'https://source.boringavatars.com/beam',
  },
  vouchers: [VouchersSchema]
});

export const UsersModel =
  mongoose.models.users || mongoose.model('users', schema);
export const UsersSchema = schema;
