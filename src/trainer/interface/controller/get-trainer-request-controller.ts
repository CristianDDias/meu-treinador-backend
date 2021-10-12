import { injectable } from 'tsyringe';
import { Controller, Route, Joi } from '../../../shared/infrastructure/http/controller/controller-router';
import { GetTrainerRequestUseCase } from '../../application/get-trainer-request-use-case';

@injectable()
export class GetTrainerRequestController implements Controller {
  route: Route = {
    method: 'get',
    path: '/trainers/:id/request/:customerId',
    auth: {
      authentication: 'customer',
    },
    schema: {
      params: {
        id: Joi.string().uuid(),
        customerId: Joi.string().uuid(),
      },
    },
  };

  constructor(private useCase: GetTrainerRequestUseCase) {}

  async execute(params: Record<string, any>) {
    return await this.useCase.execute({
      trainerId: params.id,
      customerId: params.customerId,
    });
  }
}
