import { TrainerRequestEntity } from './trainer-request-entity';

export interface TrainerRequestRepository {
  create(request: TrainerRequestEntity): Promise<void>;
  update(request: TrainerRequestEntity): Promise<void>;
  findCurrent(params: { trainerId: string; customerId: string }): Promise<TrainerRequestEntity | undefined>;
}

export const TrainerRequestRepositoryToken = 'TrainerRequestRepository';
