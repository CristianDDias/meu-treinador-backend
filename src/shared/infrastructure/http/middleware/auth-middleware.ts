import { RequestHandler } from 'express';
import { RouteAuth } from '../controller/controller-router';
import { UnauthorizedError } from '../../../error';

export class AuthMiddleware {
  create(auth: RouteAuth): RequestHandler {
    return async (req, _res, next) => {
      const token = req.headers.authorization;
      if (token !== 'MEU-TREINADOR-TOKEN' || !auth.authentication) {
        throw new UnauthorizedError('Invalid user');
      }
      return next();
    };
  }
}

// https://github.com/mwanago/nestjs-typescript/blob/part-42/src/googleAuthentication/googleAuthentication.service.ts
// https://wanago.io/2021/07/26/api-nestjs-google-authentication/
// https://wanago.io/2020/05/25/api-nestjs-authenticating-users-bcrypt-passport-jwt-cookies/
// https://wanago.io/2020/09/21/api-nestjs-refresh-tokens-jwt/
