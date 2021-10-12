import { injectable } from 'tsyringe';
import { Repository, getManager } from 'typeorm';
import { TrainerFormTemplateOrm } from './entity/trainer-form-template';
import { TrainerFormTemplateEntity } from '../domain/trainer-form-template-entity';
import { TrainerFormTemplateRepository } from '../domain/trainer-form-template-repository';

@injectable()
export class TrainerFormTemplateRepositoryImpl implements TrainerFormTemplateRepository {
  private repository: Repository<TrainerFormTemplateOrm>;

  constructor() {
    this.repository = getManager().getRepository(TrainerFormTemplateOrm);
  }

  async create(formTemplate: TrainerFormTemplateEntity): Promise<void> {
    await this.repository.save(TrainerFormTemplateOrm.fromDomain(formTemplate));
  }

  async findById(id: string): Promise<TrainerFormTemplateEntity | undefined> {
    const entity = await this.repository.findOne(id);
    return entity?.toDomain();
  }
}
