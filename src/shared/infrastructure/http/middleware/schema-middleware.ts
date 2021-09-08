import { RequestHandler } from 'express';
import { celebrate } from 'celebrate';
import { RouteSchema } from '../controller/controller-router';

export class SchemaMiddleware {
  create(schema: RouteSchema): RequestHandler {
    return celebrate(schema);
  }
}
