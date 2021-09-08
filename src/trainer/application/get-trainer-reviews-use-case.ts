import { injectable, inject } from 'tsyringe';
import { TrainerReviewRepository, TrainerReviewRepositoryToken } from '../domain/trainer-review-repository';
import { CustomerComponent } from '../../customer/interface/lib';

@injectable()
export class GetTrainerReviewsUseCase {
  constructor(
    @inject(TrainerReviewRepositoryToken) private trainerReviewRepository: TrainerReviewRepository,
    private customerComponent: CustomerComponent
  ) {}

  async execute(trainerId: string) {
    const reviews = await this.trainerReviewRepository.findAllByTrainerId(trainerId);

    const customerIds = reviews.map((review) => review.customerId);
    const customers = await this.customerComponent.getCustomersById(customerIds);
    const customerNameById = customers.reduce((map, customer) => {
      map[customer.id] = customer.name;
      return map;
    }, {} as Record<string, string>);

    return reviews.map((review) => ({
      id: review.id,
      rating: review.rating,
      description: review.description,
      createdAt: review.createdAt,
      author: customerNameById[review.customerId],
    }));
  }
}
