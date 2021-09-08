import { TrainerReviewEntity } from '../domain/trainer-review-entity';
import { TrainerReviewRepository } from '../domain/trainer-review-repository';
import trainersReviewsMock from '../../../mock/trainers-reviews.json';

const trainersReviews: TrainerReviewEntity[] = trainersReviewsMock as any;

export class TrainerReviewRepositoryImpl implements TrainerReviewRepository {
  async findAllByTrainerId(trainerId: string): Promise<TrainerReviewEntity[]> {
    return trainersReviews.filter((trainerReview) => trainerReview.trainerId === trainerId);
  }
}
