import { Document, Schema } from 'mongoose';
import { TrainerCollection, TrainerDocument, TrainerModel } from './trainer.schema';

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

export interface TrainerReviewModel {
  trainer: TrainerModel;
  author: string;
  rating: number;
  description: string;
  createdAt: Date;
}

export type TrainerReviewDocument = TrainerReviewModel & Document & { trainer: TrainerDocument };
