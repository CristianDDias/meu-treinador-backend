import { Document, Model, Schema } from 'mongoose';
import { TrainerReview } from '../../domain/trainer.interface';
import { TrainerCollection, TrainerDocument } from './trainer.model';

export const TrainerReviewCollection = 'trainers-reviews';

export const TrainerReviewSchema = new Schema(
  {
    _id: String,
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
    _id: false,
  },
);

export interface TrainerReviewDocument extends Document, Omit<TrainerReview, 'id' | 'trainer'> {
  trainer: TrainerDocument;
}

export type TrainerReviewModel = Model<TrainerReviewDocument>;
