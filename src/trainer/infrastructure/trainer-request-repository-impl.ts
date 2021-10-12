import { injectable } from 'tsyringe';
import { Repository, getManager, In } from 'typeorm';
import { TrainerRequestOrm } from './entity/trainer-request';
import { TrainerRequestEntity } from '../domain/trainer-request-entity';
import { TrainerRequestRepository } from '../domain/trainer-request-repository';
import { TrainerRequestStatus } from '../domain/trainer-interface';

@injectable()
export class TrainerRequestRepositoryImpl implements TrainerRequestRepository {
  private repository: Repository<TrainerRequestOrm>;

  constructor() {
    this.repository = getManager().getRepository(TrainerRequestOrm);
  }

  async create(request: TrainerRequestEntity): Promise<void> {
    await this.repository.save(TrainerRequestOrm.fromDomain(request));
  }

  async findCurrentRequest({
    trainerId,
    customerId,
  }: {
    trainerId: string;
    customerId: string;
  }): Promise<TrainerRequestEntity | undefined> {
    const entity = await this.repository.findOne({
      where: {
        trainerId,
        customerId,
        status: In([TrainerRequestStatus.Pending, TrainerRequestStatus.Accepted]),
      },
    });
    return entity?.toDomain();
  }
}
