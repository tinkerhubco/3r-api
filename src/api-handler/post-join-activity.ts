import { NextApiHandler } from 'next';

import { database } from '../lib/database';
import { ActivitiesModel } from '../models/activities';
import { UsersModel } from '../models/users';

export const postJoinActivity: NextApiHandler = async (req, res) => {
  const userId = '60b762733a18d95422519836';

  const { 'activity-id': activityId } = req.query;

  await database.connect();

  const user = await UsersModel.findById(userId);

  const activity = await ActivitiesModel.findByIdAndUpdate(
    activityId,
    {
      $push: {
        participants: user,
      },
    },
    {
      new: true,
    },
  );

  return res.send(activity);
};
