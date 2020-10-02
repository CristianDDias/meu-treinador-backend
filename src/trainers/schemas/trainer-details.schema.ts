import { Document, Schema } from 'mongoose';

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

export interface TrainerDetailsModel {
  qualifications: string;
  specialities: string[];
  contacts: {
    email: string;
    whatsapp: string;
  };
  locations: {
    isAttendingOnline: boolean;
    isAttendingHome: boolean;
    cities: {
      city: string;
      state: string;
      places: string[];
    }[];
  };
  schedules: {
    weekday: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
    startTime: Date;
    endTime: Date;
  }[];
}

export interface TrainerDetailsDocument extends TrainerDetailsModel, Document {}
