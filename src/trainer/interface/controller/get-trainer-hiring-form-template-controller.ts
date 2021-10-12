import { injectable } from 'tsyringe';
import { Controller, Route, Joi } from '../../../shared/infrastructure/http/controller/controller-router';
import { GetTrainerHiringFormTemplateUseCase } from '../../application/get-trainer-hiring-form-template-use-case';

@injectable()
export class GetTrainerHiringFormTemplateController implements Controller {
  route: Route = {
    method: 'get',
    path: '/trainers/:id/hiring-form-template',
    auth: {
      authentication: 'customer',
    },
    schema: {
      params: {
        id: Joi.string().uuid(),
      },
    },
  };

  constructor(private useCase: GetTrainerHiringFormTemplateUseCase) {}

  async execute(params: Record<string, any>) {
    return await this.useCase.execute(params.id);
  }
}
