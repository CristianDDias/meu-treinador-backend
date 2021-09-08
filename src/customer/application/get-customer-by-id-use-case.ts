import { injectable, inject } from 'tsyringe';
import { NotFoundError } from '../../shared/error';
import { CustomerRepository, CustomerRepositoryToken } from '../domain/customer-repository';

@injectable()
export class GetCustomerByIdUseCase {
  constructor(@inject(CustomerRepositoryToken) private customerRepository: CustomerRepository) {}

  async execute(id: string) {
    const customer = await this.customerRepository.findById(id);
    if (!customer) {
      throw new NotFoundError(`Customer ID ${id} not found.`);
    }
    return customer;
  }
}
