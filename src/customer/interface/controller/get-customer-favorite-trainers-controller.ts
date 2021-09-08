import { injectable } from 'tsyringe';
import { Controller, Route, Joi } from '../../../shared/infrastructure/http/controller/controller-router';
import { GetCustomerFavoriteTrainersUseCase } from '../../application/get-customer-favorite-trainers-use-case';

@injectable()
export class GetCustomerFavoriteTrainersController implements Controller {
  route: Route = {
    method: 'get',
    path: '/customers/:id/favorite-trainers',
    auth: {
      authentication: 'customer',
    },
    schema: {
      params: {
        id: Joi.string().uuid(),
      },
    },
  };

  constructor(private useCase: GetCustomerFavoriteTrainersUseCase) {}

  async execute(params: Record<string, any>) {
    return await this.useCase.execute(params.id);
  }
}
