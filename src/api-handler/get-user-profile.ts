import { NextApiHandler } from 'next';

import { database } from '../lib/database';
import { UsersModel } from '../models/users';
import { authentication } from '../utils/authentication';

export const getUserProfile: NextApiHandler = async (req, res) => {
  const authHeader = req.headers['authorization'];
  const token = authentication.getTokenFromHeader(authHeader);

  if (!authHeader || !token) {
    return res.status(401).send('Unauthorized access');
  }

  const parsed = authentication.tryParse(token);

  if (!parsed || !parsed.id) {
    return res.status(401).send('Unauthorized access');
  }

  const userId = parsed.id;

  await database.connect();

  const user = await UsersModel.findById(userId);

  return res.send(user);
};
