import { injectable } from 'tsyringe';
import { Controller, Route, Joi } from '../../../shared/infrastructure/http/controller/controller-router';
import { CreateTrainerUseCase } from '../../application/create-trainer-use-case';

@injectable()
export class CreateTrainerController implements Controller {
  route: Route = {
    method: 'post',
    path: '/trainers',
    auth: {
      authentication: 'admin',
    },
    schema: {
      body: {
        name: Joi.string().required(),
        description: Joi.string().required(),
        image: Joi.string().required(),
        qualifications: Joi.string().required(),
        specialties: Joi.array().items(Joi.string().required()).required(),
        contacts: Joi.object({
          email: Joi.string().email().required(),
          phone: Joi.string().required(),
        }).required(),
        locations: Joi.object({
          isProvidingInHomeService: Joi.boolean().required(),
          isProvidingOnlineService: Joi.boolean().required(),
          cities: Joi.array().items(
            Joi.object({
              city: Joi.string().required(),
              state: Joi.string().required(),
              places: Joi.array().items(Joi.string()),
            }).required()
          ),
        }).required(),
        schedules: Joi.array().items(
          Joi.object({
            weekday: Joi.string()
              .valid('monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday')
              .required(),
            startTime: Joi.string()
              .pattern(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/)
              .required(),
            endTime: Joi.string()
              .pattern(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/)
              .required(),
          }).required()
        ),
      },
    },
  };

  constructor(private useCase: CreateTrainerUseCase) {}

  async execute(params: Record<string, any>) {
    await this.useCase.execute(params as any);
  }
}
