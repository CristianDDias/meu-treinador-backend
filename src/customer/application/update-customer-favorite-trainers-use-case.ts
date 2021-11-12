import { injectable, inject } from 'tsyringe';
import { NotFoundError } from '../../shared/error';
import { CustomerRepository, CustomerRepositoryToken } from '../domain/customer-repository';
import { TrainerComponent } from '../../trainer/interface/lib';

@injectable()
export class UpdateCustomerFavoriteTrainersUseCase {
  constructor(
    @inject(CustomerRepositoryToken) private customerRepository: CustomerRepository,
    private trainerComponent: TrainerComponent
  ) {}

  async execute(id: string, trainerId: string, isFavorite: boolean) {
    const customer = await this.customerRepository.findById(id);
    if (!customer) {
      throw new NotFoundError(`Customer ID ${id} not found.`);
    }
    await this.trainerComponent.getTrainerByIdOrFail(trainerId);

    if (isFavorite) {
      customer.addFavoriteTrainer(trainerId);
    } else {
      customer.removeFavoriteTrainer(trainerId);
    }
    await this.customerRepository.update(customer);
  }
}
