import { injectable } from 'tsyringe';
import { Repository, getManager, SelectQueryBuilder } from 'typeorm';
import { TrainerOrm } from './entity/trainer';
import { TrainerEntity } from '../domain/trainer-entity';
import {
  TrainerRepository,
  TrainerQuery,
  TrainerQueryFilter,
  TrainerQueryPagination,
} from '../domain/trainer-repository';

@injectable()
export class TrainerRepositoryImpl implements TrainerRepository {
  private repository: Repository<TrainerOrm>;

  constructor() {
    this.repository = getManager().getRepository(TrainerOrm);
  }

  async findById(id: string): Promise<TrainerEntity | undefined> {
    const entity = await this.repository.findOne(id);
    return entity?.toDomain();
  }

  async findAll(query?: TrainerQuery): Promise<TrainerEntity[]> {
    const queryBuilder = this.repository.createQueryBuilder();
    this.setQueryFilter(queryBuilder, query?.filter);
    this.setQueryPagination(queryBuilder, query?.pagination);
    const entities = await queryBuilder.getMany();
    return entities.map((entity) => entity.toDomain());
  }

  async findAllById(ids: string[]): Promise<TrainerEntity[]> {
    const entities = await this.repository.findByIds(ids);
    return entities.map((entity) => entity.toDomain());
  }

  async count(filter?: TrainerQueryFilter): Promise<number> {
    const queryBuilder = this.repository.createQueryBuilder();
    this.setQueryFilter(queryBuilder, filter);
    return await queryBuilder.getCount();
  }

  async create(trainer: TrainerEntity): Promise<void> {
    await this.repository.insert(TrainerOrm.fromDomain(trainer));
  }

  async update(trainer: TrainerEntity): Promise<void> {
    await this.repository.update(trainer.id, TrainerOrm.fromDomain(trainer));
  }

  private setQueryFilter(builder: SelectQueryBuilder<any>, filter?: TrainerQueryFilter): void {
    if (filter?.name) {
      builder.andWhere(`data->>'name' iLike '%${filter.name}%'`);
    }
  }

  private setQueryPagination(builder: SelectQueryBuilder<any>, pagination?: TrainerQueryPagination): void {
    if (pagination) {
      builder.skip((pagination.page - 1) * pagination.limit);
      builder.take(pagination.limit);
    }
  }
}
