import { NextApiHandler } from 'next';

import { database } from '../lib/database';
import { RewardsModel } from '../models/rewards';

export const getAllRewards: NextApiHandler = async (req, res) => {
  await database.connect();

  const rewards = await RewardsModel.find();

  return res.send(rewards);
};
