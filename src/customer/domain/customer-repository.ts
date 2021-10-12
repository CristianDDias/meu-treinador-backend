import { CustomerEntity } from './customer-entity';

export interface CustomerRepository {
  findById(id: string): Promise<CustomerEntity | undefined>;
  findAllByIds(ids: string[]): Promise<CustomerEntity[]>;
  create(customer: CustomerEntity): Promise<void>;
  update(customer: CustomerEntity): Promise<void>;
}

export const CustomerRepositoryToken = 'CustomerRepository';
