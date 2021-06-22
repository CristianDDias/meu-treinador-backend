import { Document, Schema } from 'mongoose';
import { TrainerCollection, TrainerDocument } from './trainer.schema';
import { TrainerReviewModel } from '../interfaces/trainer.interface';

export const TrainerReviewCollection = 'trainers-reviews';

export const TrainerReviewSchema = new Schema(
  {
    trainer: {
      type: Schema.Types.ObjectId,
      ref: TrainerCollection,
    },
    author: String,
    rating: Number,
    description: String,
    createdAt: Date,
  },
  {
    collection: TrainerReviewCollection,
  },
);

export interface TrainerReviewDocument extends Omit<TrainerReviewModel, 'trainer'>, Document {
  trainer: TrainerDocument;
}
