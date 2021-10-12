import { injectable } from 'tsyringe';
import { Controller, Route, Joi } from '../../../shared/infrastructure/http/controller/controller-router';
import { UpdateTrainerHiringFormTemplateUseCase } from '../../application/update-trainer-hiring-form-template-use-case';

@injectable()
export class UpdateTrainerHiringFormTemplateController implements Controller {
  route: Route = {
    method: 'put',
    path: '/trainers/:id/hiring-form-template',
    auth: {
      authentication: 'trainer',
    },
    schema: {
      params: {
        id: Joi.string().uuid(),
      },
      body: {
        formTemplateId: Joi.string().uuid().required(),
      },
    },
  };

  constructor(private useCase: UpdateTrainerHiringFormTemplateUseCase) {}

  async execute(params: Record<string, any>) {
    await this.useCase.execute({
      trainerId: params.id,
      formTemplateId: params.formTemplateId,
    });
  }
}
