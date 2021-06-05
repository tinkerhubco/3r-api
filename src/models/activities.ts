import mongoose from 'mongoose';
import { UsersSchema } from './users';

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  mechanics: {
    type: String,
    required: true,
  },
  rewardPoints: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  organizer: {
    name: {
      type: String,
      required: true,
    },
    avatarUrl: {
      type: String,
      required: true,
    },
  },
  coverPhotoUrl: {
    type: String,
    required: true,
  },
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  }],
  maxAttemptsCount: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  scheduleTime: {
    type: String,
    required: true,
  },
});

export const ActivitiesModel =
  mongoose.models.activities || mongoose.model('activities', schema);
export const ActivitiesSchema = schema;
