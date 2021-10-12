import { TrainerFormTemplateEntity } from './trainer-form-template-entity';

export interface TrainerFormTemplateRepository {
  create(formTemplate: TrainerFormTemplateEntity): Promise<void>;
  findById(id: string): Promise<TrainerFormTemplateEntity | undefined>;
}

export const TrainerFormTemplateRepositoryToken = 'TrainerFormTemplateRepository';
