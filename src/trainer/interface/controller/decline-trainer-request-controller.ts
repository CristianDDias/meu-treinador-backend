import { injectable } from 'tsyringe';
import { Controller, Route, Joi } from '../../../shared/infrastructure/http/controller/controller-router';
import { DeclineTrainerRequestUseCase } from '../../application/decline-trainer-request-use-case';

@injectable()
export class DeclineTrainerRequestController implements Controller {
  route: Route = {
    method: 'patch',
    path: '/trainers/:id/request/:customerId/decline',
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

  constructor(private useCase: DeclineTrainerRequestUseCase) {}

  async execute(params: Record<string, any>) {
    return await this.useCase.execute({
      trainerId: params.id,
      customerId: params.customerId,
    });
  }
}
