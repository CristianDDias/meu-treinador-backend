import { injectable } from 'tsyringe';
import { Controller, Route, Joi } from '../../../shared/infrastructure/http/controller/controller-router';
import { GetTrainerReviewsUseCase } from '../../application/get-trainer-reviews-use-case';

@injectable()
export class GetTrainerReviewsController implements Controller {
  route: Route = {
    method: 'get',
    path: '/trainers/:id/reviews',
    auth: {
      authentication: 'customer',
    },
    schema: {
      params: {
        id: Joi.string().uuid(),
      },
    },
  };

  constructor(private useCase: GetTrainerReviewsUseCase) {}

  async execute(params: Record<string, any>) {
    return await this.useCase.execute(params.id);
  }
}
