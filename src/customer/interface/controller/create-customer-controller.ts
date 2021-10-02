import { injectable } from 'tsyringe';
import { Controller, Route, Joi } from '../../../shared/infrastructure/http/controller/controller-router';
import { CreateCustomerUseCase } from '../../application/create-customer-use-case';

@injectable()
export class CreateCustomerController implements Controller {
  route: Route = {
    method: 'post',
    path: '/customers',
    auth: {
      authentication: 'admin',
    },
    schema: {
      body: {
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        phone: Joi.string().required(),
        favoriteTrainerIds: Joi.array().items(Joi.string()).required(),
      },
    },
  };

  constructor(private useCase: CreateCustomerUseCase) {}

  async execute(params: Record<string, any>) {
    await this.useCase.execute({
      name: params.name,
      email: params.email,
      phone: params.phone,
      favoriteTrainerIds: params.favoriteTrainerIds,
    });
  }
}
