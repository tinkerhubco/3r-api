import { NextApiHandler } from 'next';

import * as Yup from 'yup';

import { database } from '../lib/database';
import { ActivitiesModel } from '../models/activities';
import { UsersModel } from '../models/users';
import { VouchersModel } from '../models/vouchers';
import { tryCatch, tryCatchSync } from '../utils/try-catch';

const validationSchema = Yup.object({
  // Mongodb id
  userId: Yup.string().required(),
  voucherId: Yup.string().required(),
});

export const postClaimActivityVouchers: NextApiHandler = async (req, res) => {
  const [body, validationErr] = tryCatchSync(() =>
    validationSchema.validateSync(req.body),
  );

  if (validationErr) {
    return res.status(400).send(validationErr);
  }

  const {
    'activity-id': activityId,
  } = req.query;

  const {
    userId,
    voucherId,
  } = body;

  await database.connect();

  const voucherPromise = VouchersModel.findOne({
    _id: voucherId,
  });

  const activityPromise = ActivitiesModel.findOne({
    _id: activityId,
  });

  const [collections, collectionsErr] = await tryCatch(() => Promise.all([
    voucherPromise,
    activityPromise,
  ]));

  if (collectionsErr) {
    return res.status(404).send(collectionsErr);
  }

  const [voucher, activity] = collections;

  if (!voucher) {
    return res.status(400).send('No voucher found. Please try again');
  }

  if (!activity) {
    return res.status(400).send('No activity found. Please try again');
  }

  const user = await UsersModel.findOneAndUpdate(
    {
      _id: userId,
    },
    {
      $inc: {
        points: activity.rewardPoints,
      },
      $push: {
        vouchers: [voucher],
      },
    },
    {
      new: true,
    },
  );

  return res.send(user);
};
