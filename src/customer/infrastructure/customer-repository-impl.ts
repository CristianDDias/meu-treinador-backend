import { injectable } from 'tsyringe';
import { Repository, getManager } from 'typeorm';
import { CustomerOrm } from './entity/customer';
import { CustomerEntity } from '../domain/customer-entity';
import { CustomerRepository } from '../domain/customer-repository';

@injectable()
export class CustomerRepositoryImpl implements CustomerRepository {
  private repository: Repository<CustomerOrm>;

  constructor() {
    this.repository = getManager().getRepository(CustomerOrm);
  }

  async findById(id: string): Promise<CustomerEntity | undefined> {
    const entity = await this.repository.findOne(id);
    return entity?.toDomain();
  }

  async findAllById(ids: string[]): Promise<CustomerEntity[]> {
    const entities = await this.repository.findByIds(ids);
    return entities.map((entity) => entity.toDomain());
  }

  async create(customer: CustomerEntity): Promise<void> {
    await this.repository.save(CustomerOrm.fromDomain(customer));
  }

  async update(customer: CustomerEntity): Promise<void> {
    await this.repository.save(CustomerOrm.fromDomain(customer));
  }
}
