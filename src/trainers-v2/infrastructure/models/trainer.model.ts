import { Document, Model, Schema } from 'mongoose';
import { Trainer } from '../../domain/trainer.interface';
import { TrainerDetailsCollection, TrainerDetailsDocument } from './trainer-details.model';

export const TrainerCollection = 'trainers';

export const TrainerSchema = new Schema(
  {
    _id: String,
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
    _id: false,
  },
);

export interface TrainerDocument extends Document, Omit<Trainer, 'id' | 'details'> {
  details: TrainerDetailsDocument;
}

export type TrainerModel = Model<TrainerDocument>;
