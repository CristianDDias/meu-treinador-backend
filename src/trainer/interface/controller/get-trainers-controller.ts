import { injectable } from 'tsyringe';
import { Controller, Route, Joi } from '../../../shared/infrastructure/http/controller/controller-router';
import { GetTrainersUseCase } from '../../application/get-trainers-use-case';
import { TrainerDTOAdapter } from '../dto/trainer-dto';

@injectable()
export class GetTrainersController implements Controller {
  route: Route = {
    method: 'get',
    path: '/trainers',
    auth: {
      authentication: 'customer',
    },
    schema: {
      query: {
        page: Joi.number().min(1).default(1),
        limit: Joi.number().min(1).default(10),
        name: Joi.string(),
      },
    },
  };

  constructor(private useCase: GetTrainersUseCase) {}

  async execute(params: Record<string, any>) {
    const { page, limit, name } = params;

    const { results, total } = await this.useCase.execute({
      filter: { name },
      pagination: { page, limit },
    });

    return {
      results: results.map(TrainerDTOAdapter.toSimplifiedTrainerDTO),
      limit,
      page,
      totalPages: Math.ceil(total / limit),
    };
  }
}
