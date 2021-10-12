import { injectable } from 'tsyringe';
import { Controller, Route, Joi } from '../../../shared/infrastructure/http/controller/controller-router';
import { GetTrainersUseCase } from '../../application/get-trainers-use-case';
import { ethnicityOptions, genderOptions, paymentMethodOptions, weekdayOptions } from '../../domain/trainer-interface';
import { TrainerDTOAdapter } from '../dto/trainer-dto';

@injectable()
export class GetTrainersController implements Controller {
  route: Route = {
    method: 'post',
    path: '/trainers/list',
    auth: {
      authentication: 'customer',
    },
    schema: {
      body: {
        pagination: Joi.object({
          page: Joi.number().min(1).default(1),
          limit: Joi.number().min(1).default(10),
        }).default({
          page: 1,
          limit: 10,
        }),
        filter: Joi.object({
          name: Joi.string(),
          specialties: Joi.array().items(Joi.string().required()),
          locations: Joi.object({
            isProvidingInHomeService: Joi.boolean(),
            isProvidingOnlineService: Joi.boolean(),
            cities: Joi.array().items(
              Joi.object({
                city: Joi.string().required(),
                state: Joi.string().required(),
              })
            ),
          }).min(1),
          schedules: Joi.object({
            weekdays: Joi.array().items(
              Joi.string()
                .valid(...weekdayOptions)
                .required()
            ),
            startTime: Joi.string().pattern(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/),
            endTime: Joi.string().pattern(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/),
          }).min(1),
          rating: Joi.object({
            min: Joi.number().min(1).max(5),
            max: Joi.number()
              .max(5)
              .when('min', { then: Joi.number().min(Joi.ref('min')) }),
          }).min(1),
          price: Joi.object({
            min: Joi.number().min(1),
            max: Joi.number().when('min', { then: Joi.number().min(Joi.ref('min')) }),
          }).min(1),
          ethnicities: Joi.array().items(
            Joi.string()
              .valid(...ethnicityOptions)
              .required()
          ),
          genders: Joi.array().items(
            Joi.string()
              .valid(...genderOptions)
              .required()
          ),
          paymentMethods: Joi.array().items(
            Joi.string()
              .valid(...paymentMethodOptions)
              .required()
          ),
        }),
      },
    },
  };

  constructor(private useCase: GetTrainersUseCase) {}

  async execute(params: Record<string, any>) {
    const { pagination, filter } = params;
    const { results, total } = await this.useCase.execute({ filter, pagination });
    return {
      results: results.map(TrainerDTOAdapter.toSimplifiedTrainerDTO),
      limit: pagination.limit,
      page: pagination.page,
      totalPages: Math.ceil(total / pagination.limit),
    };
  }
}
