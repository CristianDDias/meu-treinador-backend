import { injectable } from 'tsyringe';
import { Controller, Route, Joi } from '../../../shared/infrastructure/http/controller/controller-router';
import { CreateTrainerFormTemplateUseCase } from '../../application/create-trainer-form-template-use-case';
import { QuestionType, questionTypeOptions } from '../../domain/trainer-interface';

@injectable()
export class CreateTrainerFormTemplateController implements Controller {
  route: Route = {
    method: 'post',
    path: '/trainers/:id/form-template',
    auth: {
      authentication: 'trainer',
    },
    schema: {
      params: {
        id: Joi.string().uuid(),
      },
      body: {
        name: Joi.string().required(),
        form: Joi.array()
          .items(
            Joi.object({
              type: Joi.string()
                .valid(...questionTypeOptions)
                .required(),
              question: Joi.string().required(),
              options: Joi.array()
                .items(Joi.string().required())
                .when('type', {
                  is: [QuestionType.MultipleChoice, QuestionType.SingleChoice],
                  then: Joi.required(),
                  otherwise: Joi.forbidden(),
                }),
            }).required()
          )
          .required(),
      },
    },
  };

  constructor(private useCase: CreateTrainerFormTemplateUseCase) {}

  async execute(params: Record<string, any>) {
    await this.useCase.execute({
      trainerId: params.id,
      name: params.name,
      form: params.form,
    });
  }
}
