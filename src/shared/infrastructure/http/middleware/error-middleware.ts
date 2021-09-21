import { ErrorRequestHandler } from 'express';
import { CelebrateError } from 'celebrate';
import { BusinessError, ForbiddenError, NotFoundError, UnauthorizedError } from '../../../error';

export const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
  console.error(error);

  if (error instanceof CelebrateError) {
    return res.status(400).json({
      statusCode: 400,
      title: 'Bad request',
      message: 'Request validation failed',
      validation: Array.from(error.details.entries()).reduce((validations, [segment, joiError]) => {
        validations[segment] = {
          message: joiError.message,
        };
        return validations;
      }, {}),
    });
  }

  if (error instanceof BusinessError) {
    return res.status(400).json({
      statusCode: 400,
      title: error.title,
      message: error.message,
    });
  }

  if (error instanceof UnauthorizedError) {
    return res.status(401).json({
      statusCode: 401,
      title: error.title,
      message: error.message,
    });
  }

  if (error instanceof ForbiddenError) {
    return res.status(403).json({
      statusCode: 403,
      title: error.title,
      message: error.message,
    });
  }

  if (error instanceof NotFoundError) {
    return res.status(404).json({
      statusCode: 404,
      title: error.title,
      message: error.message,
    });
  }

  return res.status(500).json({
    statusCode: 500,
    title: 'Internal server error',
    message: error.message,
  });
};
