import { Document, Schema } from 'mongoose';
import { TrainerDetailsModel } from '../interfaces/trainer.interface';

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

export interface TrainerDetailsDocument extends TrainerDetailsModel, Document {}
