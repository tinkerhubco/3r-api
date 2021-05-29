import { NextApiHandler } from 'next';

export const getHelloHandler: NextApiHandler = (req, res) => {
  return res.status(200).send('Hello World!');
};
