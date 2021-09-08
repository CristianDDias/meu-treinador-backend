import { injectable } from 'tsyringe';
import { Controller, Route, Joi } from '../../../shared/infrastructure/http/controller/controller-router';
import { GetTrainerByIdUseCase } from '../../application/get-trainer-by-id-use-case';
import { TrainerDTOAdapter } from '../dto/trainer-dto';

@injectable()
export class GetTrainerByIdController implements Controller {
  route: Route = {
    method: 'get',
    path: '/trainers/:id',
    auth: {
      authentication: 'customer',
    },
    schema: {
      params: {
        id: Joi.string().uuid(),
      },
    },
  };

  constructor(private useCase: GetTrainerByIdUseCase) {}

  async execute(params: Record<string, any>) {
    const trainer = await this.useCase.execute(params.id);
    return TrainerDTOAdapter.toDetailedTrainerDTO(trainer);
  }
}
