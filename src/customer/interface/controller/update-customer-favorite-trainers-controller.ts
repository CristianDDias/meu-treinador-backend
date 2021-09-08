import { injectable } from 'tsyringe';
import { Controller, Route, Joi } from '../../../shared/infrastructure/http/controller/controller-router';
import { UpdateCustomerFavoriteTrainersUseCase } from '../../application/update-customer-favorite-trainers-use-case';

@injectable()
export class UpdateCustomerFavoriteTrainersController implements Controller {
  route: Route = {
    method: 'put',
    path: '/customers/:id/favorite-trainers',
    auth: {
      authentication: 'customer',
    },
    schema: {
      params: {
        id: Joi.string().uuid(),
      },
      body: {
        trainerId: Joi.string().uuid().required(),
        isFavorite: Joi.boolean().required(),
      },
    },
  };

  constructor(private useCase: UpdateCustomerFavoriteTrainersUseCase) {}

  async execute(params: Record<string, any>) {
    await this.useCase.execute(params.id, params.trainerId, params.isFavorite);
  }
}
