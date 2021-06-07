import { NextApiHandler } from 'next';

import { database } from '../lib/database';
import { ActivitiesModel } from '../models/activities';
import { VouchersModel } from '../models/vouchers';

export const getActivity: NextApiHandler = async (req, res) => {
  await database.connect();

  const userId = '60b762733a18d95422519836';

  const { 'activity-id': activityId } = req.query;

  const activity = await ActivitiesModel.findOne({
    _id: activityId,
  });

  const hasJoined = !!activity.participants.find((id: any) => {
    return id.equals(userId);
  });

  const earnedPoints = 0;
  const attemptsCount = 0;
  const participantsCount = activity.participants.length;
  const vouchers = await VouchersModel.find({
    activityId,
  });

  const activityWithComputedProperties = {
    ...activity._doc,
    hasJoined,
    earnedPoints,
    attemptsCount,
    participantsCount,
    vouchers,
  };

  return res.send(activityWithComputedProperties);
};
