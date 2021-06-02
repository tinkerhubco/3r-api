import { NextApiHandler } from 'next';

import { authentication } from './authentication';

export const apiAuthenticationHandler: NextApiHandler = (req, res) => {
  const authHeader = req.headers['authorization'];
  const token = authentication.getTokenFromHeader(authHeader);

  if (!authHeader || !token) {
    return res.status(401).send('Unauthorized access');
  }

  const parsed = authentication.tryParse(token);

  if (!parsed || !parsed.id) {
    return res.status(401).send('Unauthorized access');
  }
};
