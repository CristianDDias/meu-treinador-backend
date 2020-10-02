import { Document, Schema } from 'mongoose';
import { TrainerDetailsCollection, TrainerDetailsDocument } from './trainer-details.schema';
import { TrainerModel } from '../interfaces/trainer.interface';

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

export interface TrainerDocument extends Omit<TrainerModel, 'details'>, Document {
  details: TrainerDetailsDocument;
}
