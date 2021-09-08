import { TrainerEntity } from './trainer-entity';

export interface TrainerQuery {
  filter?: TrainerQueryFilter;
  pagination?: TrainerQueryPagination;
}

export interface TrainerQueryFilter {
  name?: string | RegExp;
}

export interface TrainerQueryPagination {
  page: number;
  limit: number;
}

export interface TrainerRepository {
  findById(id: string): Promise<TrainerEntity | undefined>;
  findAll(query?: TrainerQuery): Promise<TrainerEntity[]>;
  findAllById(ids: string[]): Promise<TrainerEntity[]>;
  count(filter?: TrainerQueryFilter): Promise<number>;
  create(trainer: TrainerEntity): Promise<void>;
}

export const TrainerRepositoryToken = 'TrainerRepository';
