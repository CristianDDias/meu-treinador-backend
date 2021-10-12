import { TrainerEntity } from './trainer-entity';

export interface TrainerQuery {
  filter?: TrainerQueryFilter;
  pagination?: TrainerQueryPagination;
}

export interface TrainerQueryFilter {
  name?: string;
  specialties?: string[];
  locations?: {
    cities?: { city: string; state: string }[];
    isProvidingOnlineService?: boolean;
    isProvidingInHomeService?: boolean;
  };
  schedules?: {
    weekdays?: string[];
    startTime?: string;
    endTime?: string;
  };
  rating?: {
    min?: number;
    max?: number;
  };
  price?: {
    min?: number;
    max?: number;
  };
  ethnicities?: string[];
  genders?: string[];
  paymentMethods?: string[];
}

export interface TrainerQueryPagination {
  page: number;
  limit: number;
}

export interface TrainerRepository {
  findById(id: string): Promise<TrainerEntity | undefined>;
  findAll(query?: TrainerQuery): Promise<TrainerEntity[]>;
  findAllByIds(ids: string[]): Promise<TrainerEntity[]>;
  count(filter?: TrainerQueryFilter): Promise<number>;
  create(trainer: TrainerEntity): Promise<void>;
  update(trainer: TrainerEntity): Promise<void>;
}

export const TrainerRepositoryToken = 'TrainerRepository';
