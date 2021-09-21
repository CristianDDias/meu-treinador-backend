import { TrainerReviewEntity } from './trainer-review-entity';

export interface TrainerReviewRepository {
  create(review: TrainerReviewEntity): Promise<void>;
  findAllByTrainerId(trainerId: string): Promise<TrainerReviewEntity[]>;
}

export const TrainerReviewRepositoryToken = 'TrainerReviewRepository';
