import { TrainerReviewEntity } from './trainer-review-entity';

export interface TrainerReviewRepository {
  findAllByTrainerId(trainerId: string): Promise<TrainerReviewEntity[]>;
}

export const TrainerReviewRepositoryToken = 'TrainerReviewRepository';
