import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mechanics: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    default: 0
  },
  coverPhotoUrl: {
    type: String,
    default: 'https://via.placeholder.com/500',
  },
  partner: {
    name: {
      type: String,
      required: true,
    },
  },
  activityId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Activities',
  },
});

export const VouchersModel =
  mongoose.models.vouchers || mongoose.model('vouchers', schema);
export const VouchersSchema = schema;
