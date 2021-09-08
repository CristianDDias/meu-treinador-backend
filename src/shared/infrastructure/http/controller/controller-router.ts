import { RequestHandler, Router, Request } from 'express';
import { injectable } from 'tsyringe';
import Joi, { AnySchema } from 'joi';
import { AuthMiddleware } from '../middleware/auth-middleware';
import { SchemaMiddleware } from '../middleware/schema-middleware';

type RouteMethod = 'get' | 'post' | 'put' | 'delete' | 'patch';

type RoutePath = string;

export type RouteAuth = {
  authentication?: 'trainer' | 'customer' | 'admin';
  authorization?: 'feature-1' | 'feature-2';
};

export type RouteSchema = {
  params?: { [key: string]: AnySchema };
  headers?: { [key: string]: AnySchema };
  query?: { [key: string]: AnySchema };
  body?: { [key: string]: AnySchema };
};

export type Route = {
  method: RouteMethod;
  path: RoutePath;
  auth?: RouteAuth;
  schema?: RouteSchema;
};

export interface Controller {
  route: Route;
  execute: (params: Record<string, any>) => Promise<any>;
}

@injectable()
export class ControllerRouter {
  constructor(private authMiddleware: AuthMiddleware, private schemaMiddleware: SchemaMiddleware) {}

  creteRoute(controller: Controller): Router {
    console.log(`Route: ${controller.route.method} ${controller.route.path}`);

    const router = Router();

    const middlewares: RequestHandler[] = [];
    if (controller.route.auth) {
      middlewares.push(this.authMiddleware.create(controller.route.auth));
    }
    if (controller.route.schema) {
      middlewares.push(this.schemaMiddleware.create(controller.route.schema));
    }

    router[controller.route.method](controller.route.path, ...middlewares, async (req, res) => {
      const result = await controller.execute(this.extractRequestParams(req, controller.route.schema));
      if (result) {
        return res.status(200).json(result);
      } else {
        return res.status(200).send();
      }
    });

    return router;
  }

  private extractRequestParams(req: Request, schema?: RouteSchema): any {
    return Object.keys(schema || {}).reduce((params, key) => ({ ...params, ...req[key] }), {});
  }
}

export { Joi };
