import { Document, Schema } from 'mongoose';
import { TrainerDetailsCollection, TrainerDetailsDocument, TrainerDetailsModel } from './trainer-details.schema';

export const TrainerCollection = 'trainers';

export const TrainerSchema = new Schema(
  {
    name: String,
    description: String,
    image: String,
    rating: {
      value: Number,
      reviews: Number,
    },
    details: {
      type: Schema.Types.ObjectId,
      ref: TrainerDetailsCollection,
    },
  },
  {
    collection: TrainerCollection,
  },
);

export interface TrainerModel {
  name: string;
  description: string;
  image: string;
  rating: {
    value: number;
    reviews: number;
  };
  details: TrainerDetailsModel;
}

export interface TrainerDocument extends Omit<TrainerModel, 'details'>, Document {
  details: TrainerDetailsDocument;
}
