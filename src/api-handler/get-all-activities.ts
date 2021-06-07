import { NextApiHandler } from 'next';

import { database } from '../lib/database';
import { ActivitiesModel } from '../models/activities';
import { VouchersModel } from '../models/vouchers';

export const getAllActivities: NextApiHandler = async (req, res) => {
  await database.connect();

  const userId = '60b762733a18d95422519836';

  const activities = await ActivitiesModel.find();

  const activitiesWithComputedProperties = await Promise.all(
    activities.map(async (activity) => {
      const hasJoined = !!activity.participants.find((id: any) => {
        return id.equals(userId);
      });

      const activityId = activity._id;

      const earnedPoints = 0;
      const attemptsCount = 0;
      const participantsCount = activity.participants.length;
      const vouchers = await VouchersModel.find({
        activityId,
      });

      return {
        ...activity._doc,
        hasJoined,
        earnedPoints,
        attemptsCount,
        participantsCount,
        vouchers,
      };
    }),
  );

  const upcoming = [...activitiesWithComputedProperties];
  const trending = [...activitiesWithComputedProperties].reverse();

  const responseBody = {
    upcoming,
    trending,
  };

  return res.send(responseBody);
};
