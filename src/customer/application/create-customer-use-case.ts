import { injectable, inject } from 'tsyringe';
import { Customer } from '../domain/customer-interface';
import { CustomerEntity } from '../domain/customer-entity';
import { CustomerRepository, CustomerRepositoryToken } from '../domain/customer-repository';

@injectable()
export class CreateCustomerUseCase {
  constructor(@inject(CustomerRepositoryToken) private customerRepository: CustomerRepository) {}

  async execute(customer: Customer) {
    await this.customerRepository.create(CustomerEntity.create(customer));
  }
}
