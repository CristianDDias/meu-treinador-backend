import { injectable, inject } from 'tsyringe';
import { CustomerRepository, CustomerRepositoryToken } from '../domain/customer-repository';

@injectable()
export class GetCustomersByIdsUseCase {
  constructor(@inject(CustomerRepositoryToken) private customerRepository: CustomerRepository) {}

  async execute(ids: string[]) {
    return await this.customerRepository.findAllByIds(ids);
  }
}
