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

const toOptions = (list: string[]): string => {
  return list.map((value) => `'${value}'`).join(',');
};

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

  async findAllByIds(ids: string[]): Promise<TrainerEntity[]> {
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
      builder.andWhere(`data->>'name' ilike '%${filter.name}%'`);
    }

    if (filter?.genders) {
      builder.andWhere(`data->>'gender' in (${toOptions(filter.genders)})`);
    }
    if (filter?.ethnicities) {
      builder.andWhere(`data->>'ethnicity' in (${toOptions(filter.ethnicities)})`);
    }

    if (filter?.specialties) {
      builder.andWhere(`data->'specialties' ?| array[${toOptions(filter.specialties)}]`);
    }
    if (filter?.paymentMethods) {
      builder.andWhere(`data->'paymentMethods' ?| array[${toOptions(filter.paymentMethods)}]`);
    }

    if (filter?.price?.min) {
      builder.andWhere(`data->'price' >= '${filter.price.min}'`);
    }
    if (filter?.price?.max) {
      builder.andWhere(`data->'price' <= '${filter.price.max}'`);
    }

    if (filter?.rating?.min) {
      builder.andWhere(`data->'rating'->'value' >= '${filter.rating.min}'`);
    }
    if (filter?.rating?.max) {
      builder.andWhere(`data->'rating'->'value' <= '${filter.rating.max}'`);
    }

    if (filter?.locations?.isProvidingOnlineService) {
      builder.andWhere(`data->'locations'->'isProvidingOnlineService' = 'true'`);
    }
    if (filter?.locations?.isProvidingInHomeService) {
      builder.andWhere(`data->'locations'->'isProvidingInHomeService' = 'true'`);
    }

    if (filter?.locations?.cities) {
      builder.andWhere(
        `data @? '$.locations.cities[*] ? (${filter.locations.cities
          .map(({ city, state }) => `(@.city == "${city}" && @.state == "${state}")`)
          .join(' || ')})'`
      );
    }

    if (filter?.schedules?.weekdays) {
      builder.andWhere(
        `data @? '$.schedules[*].weekday ? (${filter.schedules.weekdays
          .map((value) => `@ == "${value}"`)
          .join(' || ')})'`
      );
    }

    if (filter?.schedules?.startTime) {
      builder.andWhere(
        `data @? '$.schedules[*] ? (@.startTime >= "${filter.schedules.startTime}" || @.endTime >= "${filter.schedules.startTime}")'`
      );
    }
    if (filter?.schedules?.endTime) {
      builder.andWhere(
        `data @? '$.schedules[*] ? (@.startTime <= "${filter.schedules.endTime}" || @.endTime <= "${filter.schedules.endTime}")'`
      );
    }
  }

  private setQueryPagination(builder: SelectQueryBuilder<any>, pagination?: TrainerQueryPagination): void {
    if (pagination) {
      builder.skip((pagination.page - 1) * pagination.limit);
      builder.take(pagination.limit);
    }
  }
}
