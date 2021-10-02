import { injectable } from 'tsyringe';
import { Controller, Route, Joi } from '../../../shared/infrastructure/http/controller/controller-router';
import { CreateTrainerReviewUseCase } from '../../application/create-trainer-review-use-case';

@injectable()
export class CreateTrainerReviewController implements Controller {
  route: Route = {
    method: 'post',
    path: '/trainer-reviews',
    auth: {
      authentication: 'customer',
    },
    schema: {
      body: {
        trainerId: Joi.string().uuid().required(),
        customerId: Joi.string().uuid().required(),
        rating: Joi.number().min(1).max(5).required(),
        description: Joi.string().required(),
      },
    },
  };

  constructor(private useCase: CreateTrainerReviewUseCase) {}

  async execute(params: Record<string, any>) {
    await this.useCase.execute({
      trainerId: params.trainerId,
      customerId: params.customerId,
      rating: params.rating,
      description: params.description,
    });
  }
}
