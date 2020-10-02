import * as Joi from 'joi';
import {
  TrainerModel,
  TrainerRatingModel,
  TrainerDetailsModel,
  TrainerContactsModel,
  TrainerLocationsModel,
  TrainerCityModel,
  TrainerScheduleModel,
} from '../interfaces/trainer.interface';

const schema = Joi.object<TrainerModel>({
  name: Joi.string().required(),

  description: Joi.string().required(),

  image: Joi.string().required(),

  rating: Joi.object<TrainerRatingModel>({
    value: Joi.number().required(),
    reviews: Joi.number().required(),
  }).required(),

  details: Joi.object<TrainerDetailsModel>({
    qualifications: Joi.string().required(),

    specialities: Joi.array()
      .items(Joi.string())
      .required(),

    contacts: Joi.object<TrainerContactsModel>({
      email: Joi.string(),
      whatsapp: Joi.string(),
    })
      .required()
      .or('email', 'whatsapp'),

    locations: Joi.object<TrainerLocationsModel>({
      isAttendingOnline: Joi.boolean().required(),
      isAttendingHome: Joi.boolean().required(),
      cities: Joi.array()
        .items(
          Joi.object<TrainerCityModel>({
            city: Joi.string().required(),
            state: Joi.string().required(),
            places: Joi.array().items(Joi.string()),
          }).required(),
        )
        .required(),
    }).required(),

    schedules: Joi.array()
      .items(
        Joi.object<TrainerScheduleModel>({
          weekday: Joi.string()
            .valid('monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday')
            .required(),
          startTime: Joi.date().required(),
          endTime: Joi.date().required(),
        }).required(),
      )
      .required(),
  }).required(),
});

export const validateTrainer = async (value: TrainerModel): Promise<void> => {
  await schema.validateAsync(value);
};
