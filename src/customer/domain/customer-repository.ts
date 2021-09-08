import { CustomerEntity } from './customer-entity';

export interface CustomerRepository {
  findById(id: string): Promise<CustomerEntity | undefined>;
  findAllById(ids: string[]): Promise<CustomerEntity[]>;
  create(customer: CustomerEntity): Promise<void>;
  update(customer: CustomerEntity): Promise<void>;
}

export const CustomerRepositoryToken = 'CustomerRepository';
