import { injectable } from 'tsyringe';
import { Repository, getManager } from 'typeorm';
import { TrainerReviewOrm } from './entity/trainer-review';
import { TrainerReviewEntity } from '../domain/trainer-review-entity';
import { TrainerReviewRepository } from '../domain/trainer-review-repository';

@injectable()
export class TrainerReviewRepositoryImpl implements TrainerReviewRepository {
  private repository: Repository<TrainerReviewOrm>;

  constructor() {
    this.repository = getManager().getRepository(TrainerReviewOrm);
  }

  async create(review: TrainerReviewEntity): Promise<void> {
    await this.repository.save(TrainerReviewOrm.fromDomain(review));
  }

  async findAllByTrainerId(trainerId: string): Promise<TrainerReviewEntity[]> {
    const entities = await this.repository.find({ where: { trainerId } });
    return entities.map((entity) => entity.toDomain());
  }
}
