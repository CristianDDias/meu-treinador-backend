import { injectable, inject } from 'tsyringe';
import { NotFoundError } from '../../shared/error';
import { CustomerRepository, CustomerRepositoryToken } from '../domain/customer-repository';
import { TrainerComponent } from '../../trainer/interface/lib';

@injectable()
export class GetCustomerFavoriteTrainersUseCase {
  constructor(
    @inject(CustomerRepositoryToken) private customerRepository: CustomerRepository,
    private trainerComponent: TrainerComponent
  ) {}

  async execute(id: string) {
    const customer = await this.customerRepository.findById(id);
    if (!customer) {
      throw new NotFoundError(`Customer ID ${id} not found.`);
    }
    return await this.trainerComponent.getTrainersByIds(customer.favoriteTrainerIds);
  }
}
