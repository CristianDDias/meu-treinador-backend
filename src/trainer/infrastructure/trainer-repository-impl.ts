import { TrainerEntity } from '../domain/trainer-entity';
import { TrainerRepository, TrainerQuery, TrainerQueryFilter } from '../domain/trainer-repository';
import trainersMock from '../../../mock/trainers.json';

const trainers: TrainerEntity[] = trainersMock as any;

export class TrainerRepositoryImpl implements TrainerRepository {
  async findById(id: string): Promise<TrainerEntity | undefined> {
    return trainers.find((trainer) => trainer.id === id);
  }

  async findAll(query?: TrainerQuery): Promise<TrainerEntity[]> {
    return trainers
      .filter((trainer) => (query?.filter?.name ? trainer.name.match(query.filter.name) : true))
      .slice(
        query?.pagination ? (query.pagination.page - 1) * query.pagination.limit : 0,
        query?.pagination ? (query.pagination.page - 1) * query.pagination.limit + query.pagination.limit : undefined
      );
  }

  async findAllById(ids: string[]): Promise<TrainerEntity[]> {
    return trainers.filter((trainer) => ids.includes(trainer.id));
  }

  async count(filter?: TrainerQueryFilter): Promise<number> {
    return trainers.filter((trainer) => (filter?.name ? trainer.name.match(filter.name) : true)).length;
  }

  async create(trainer: TrainerEntity): Promise<void> {
    trainers.push(trainer);
  }
}

// https://github.com/gupy-io/inbound-recruiting/blob/main/src/backend/container.ts#L145
// https://github.com/gupy-io/inbound-recruiting/blob/main/src/backend/components/segmented-list/infrastructure/segmented-list-repository-impl.ts

// https://wanago.io/2020/05/18/api-nestjs-postgresql-typeorm/
// https://wanago.io/2020/12/28/nestjs-json-postgresql-typeorm/

// https://dashboard.heroku.com/apps/meu-treinador-backend/resources?justInstalledAddonServiceId=6c67493d-8fc2-4cd4-9161-4f1ec11cbe69
// https://data.heroku.com/datastores/6ac9862e-b79f-457a-8d75-18d7591a7083#administration
