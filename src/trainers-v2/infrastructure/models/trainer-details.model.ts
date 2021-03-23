import { Document, Model, Schema } from 'mongoose';
import { TrainerDetails } from '../../domain/trainer.interface';

export const TrainerDetailsCollection = 'trainers-details';

export const TrainerDetailsSchema = new Schema(
  {
    qualifications: String,
    specialties: [String],
    contacts: {
      email: String,
      whatsapp: String,
    },
    locations: {
      isAttendingOnline: Boolean,
      isAttendingHome: Boolean,
      cities: [
        {
          city: String,
          state: String,
          places: [String],
        },
      ],
    },
    schedules: [
      {
        weekday: String,
        startTime: String,
        endTime: String,
      },
    ],
  },
  {
    collection: TrainerDetailsCollection,
  },
);

export interface TrainerDetailsDocument extends Document, TrainerDetails {}

export type TrainerDetailsModel = Model<TrainerDetailsDocument>;
