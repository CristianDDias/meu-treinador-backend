import { injectable, inject } from 'tsyringe';
import { NotFoundError } from '../../shared/error';
import { TrainerEntity } from '../domain/trainer-entity';
import { TrainerReview } from '../domain/trainer-interface';
import { TrainerReviewEntity } from '../domain/trainer-review-entity';
import { TrainerRepository, TrainerRepositoryToken } from '../domain/trainer-repository';
import { TrainerReviewRepository, TrainerReviewRepositoryToken } from '../domain/trainer-review-repository';
import { CustomerComponent } from '../../customer/interface/lib';

@injectable()
export class CreateTrainerReviewUseCase {
  constructor(
    @inject(TrainerRepositoryToken) private trainerRepository: TrainerRepository,
    @inject(TrainerReviewRepositoryToken) private trainerReviewRepository: TrainerReviewRepository,
    private customerComponent: CustomerComponent
  ) {}

  async execute(review: Omit<TrainerReview, 'createdAt'>) {
    const trainer = await this.trainerRepository.findById(review.trainerId);
    if (!trainer) {
      throw new NotFoundError(`Trainer ID ${review.trainerId} not found.`);
    }
    await this.customerComponent.getCustomerById(review.customerId); // Throws an error when not found

    await this.trainerReviewRepository.create(TrainerReviewEntity.create({ ...review, createdAt: new Date() }));
    await this.updateTrainerRating(trainer);
  }

  private async updateTrainerRating(trainer: TrainerEntity): Promise<void> {
    const reviews = await this.trainerReviewRepository.findAllByTrainerId(trainer.id);
    trainer.rating = {
      reviews: reviews.length,
      value: Number((reviews.reduce((total, { rating }) => total + rating, 0) / reviews.length).toFixed(1)),
    };
    await this.trainerRepository.update(trainer);
  }
}
