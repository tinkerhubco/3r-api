import { decode } from 'jsonwebtoken';

export const authentication = {
  /**
   *
   * @param headerValue - Example of headerValue would be "bearer token"
   */
  getTokenFromHeader: (headerValue?: string) => {
    if (!headerValue) {
      return;
    }
    const [, token] = headerValue.split(' ');
    return token;
  },
  tryParse: (token: string): { [key in string]: string } | undefined => {
    const decoded = decode(token);
    if (!decoded) {
      return;
    }
    return decoded as { [key in string]: string };
  },
};
