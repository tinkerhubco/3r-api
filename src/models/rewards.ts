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
});

export const RewardsModel =
  mongoose.models.rewards || mongoose.model('rewards', schema);
export const RewardsSchema = schema;
