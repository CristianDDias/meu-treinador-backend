import { injectable, inject } from 'tsyringe';
import { NotFoundError } from '../../shared/error';
import { TrainerFormTemplate } from '../domain/trainer-interface';
import { TrainerFormTemplateEntity } from '../domain/trainer-form-template-entity';
import { TrainerRepository, TrainerRepositoryToken } from '../domain/trainer-repository';
import {
  TrainerFormTemplateRepository,
  TrainerFormTemplateRepositoryToken,
} from '../domain/trainer-form-template-repository';

@injectable()
export class CreateTrainerFormTemplateUseCase {
  constructor(
    @inject(TrainerRepositoryToken) private trainerRepository: TrainerRepository,
    @inject(TrainerFormTemplateRepositoryToken) private trainerFormTemplateRepository: TrainerFormTemplateRepository
  ) {}

  async execute(formTemplate: TrainerFormTemplate) {
    const trainer = await this.trainerRepository.findById(formTemplate.trainerId);
    if (!trainer) {
      throw new NotFoundError(`Trainer ID ${formTemplate.trainerId} not found.`);
    }
    await this.trainerFormTemplateRepository.create(TrainerFormTemplateEntity.create(formTemplate));
  }
}
