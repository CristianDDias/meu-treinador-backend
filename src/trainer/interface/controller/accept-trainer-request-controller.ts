import { injectable } from 'tsyringe';
import { Controller, Route, Joi } from '../../../shared/infrastructure/http/controller/controller-router';
import { AcceptTrainerRequestUseCase } from '../../application/accept-trainer-request-use-case';

@injectable()
export class AcceptTrainerRequestController implements Controller {
  route: Route = {
    method: 'patch',
    path: '/trainers/:id/request/:customerId/accept',
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

  constructor(private useCase: AcceptTrainerRequestUseCase) {}

  async execute(params: Record<string, any>) {
    return await this.useCase.execute({
      trainerId: params.id,
      customerId: params.customerId,
    });
  }
}
