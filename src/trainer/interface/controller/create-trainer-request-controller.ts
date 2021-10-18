import { injectable } from 'tsyringe';
import { Controller, Route, Joi } from '../../../shared/infrastructure/http/controller/controller-router';
import { CreateTrainerRequestUseCase } from '../../application/create-trainer-request-use-case';
import { QuestionType, questionTypeOptions } from '../../domain/trainer-interface';

@injectable()
export class CreateTrainerRequestController implements Controller {
  route: Route = {
    method: 'post',
    path: '/trainers/:id/request/:customerId',
    auth: {
      authentication: 'customer',
    },
    schema: {
      params: {
        id: Joi.string().uuid(),
        customerId: Joi.string().uuid(),
      },
      body: {
        form: Joi.array()
          .items(
            Joi.object({
              type: Joi.string()
                .valid(...questionTypeOptions)
                .required(),
              question: Joi.string().required(),
              answer: Joi.required().when('type', {
                switch: [
                  { is: QuestionType.MultipleChoice, then: Joi.array().items(Joi.string().required()) },
                  { is: QuestionType.SingleChoice, then: Joi.string() },
                  { is: QuestionType.Text, then: Joi.string() },
                ],
              }),
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

  constructor(private useCase: CreateTrainerRequestUseCase) {}

  async execute(params: Record<string, any>) {
    await this.useCase.execute({
      trainerId: params.id,
      customerId: params.customerId,
      form: params.form,
    });
  }
}
