import { CustomerEntity } from '../domain/customer-entity';
import { CustomerRepository } from '../domain/customer-repository';
import customersMock from '../../../mock/customers.json';

const customers = customersMock.map((customer) => CustomerEntity.create(customer, customer.id));

export class CustomerRepositoryImpl implements CustomerRepository {
  async findById(id: string): Promise<CustomerEntity | undefined> {
    return customers.find((customer) => customer.id === id);
  }

  async findAllById(ids: string[]): Promise<CustomerEntity[]> {
    return customers.filter((customer) => ids.includes(customer.id));
  }

  async create(customer: CustomerEntity): Promise<void> {
    customers.push(customer);
  }

  async update(customer: CustomerEntity): Promise<void> {
    const index = customers.findIndex(({ id }) => id === customer.id);
    if (index >= 0) {
      customers[index] = customer;
    }
  }
}
