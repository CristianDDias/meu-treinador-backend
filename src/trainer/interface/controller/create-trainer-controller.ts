import { injectable } from 'tsyringe';
import { Controller, Route, Joi } from '../../../shared/infrastructure/http/controller/controller-router';
import { CreateTrainerUseCase } from '../../application/create-trainer-use-case';
import { ethnicityOptions, genderOptions, paymentMethodOptions, weekdayOptions } from '../../domain/trainer-interface';

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
        gender: Joi.string()
          .valid(...genderOptions)
          .required(),
        ethnicity: Joi.string()
          .valid(...ethnicityOptions)
          .required(),
        price: Joi.number().min(1).required(),
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
              .valid(...weekdayOptions)
              .required(),
            startTime: Joi.string()
              .pattern(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/)
              .required(),
            endTime: Joi.string()
              .pattern(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/)
              .required(),
          }).required()
        ),
        paymentMethods: Joi.array()
          .items(
            Joi.string()
              .valid(...paymentMethodOptions)
              .required()
          )
          .required(),
      },
    },
  };

  constructor(private useCase: CreateTrainerUseCase) {}

  async execute(params: Record<string, any>) {
    await this.useCase.execute({
      name: params.name,
      description: params.description,
      image: params.image,
      gender: params.gender,
      ethnicity: params.ethnicity,
      price: params.price,
      qualifications: params.qualifications,
      specialties: params.specialties,
      contacts: params.contacts,
      locations: params.locations,
      schedules: params.schedules,
      paymentMethods: params.paymentMethods,
    });
  }
}
