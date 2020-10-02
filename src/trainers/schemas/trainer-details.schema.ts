import { Document, Schema } from 'mongoose';
import { TrainerDetailsModel } from '../interfaces/trainer.interface';

export const TrainerDetailsCollection = 'trainers-details';

export const TrainerDetailsSchema = new Schema(
  {
    qualifications: String,
    specialities: [String],
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
        startTime: Date,
        endTime: Date,
      },
    ],
  },
  {
    collection: TrainerDetailsCollection,
  },
);

export interface TrainerDetailsDocument extends TrainerDetailsModel, Document {}
