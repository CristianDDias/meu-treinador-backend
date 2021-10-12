import { injectable, inject } from 'tsyringe';
import { NotFoundError } from '../../shared/error';
import { TrainerRepository, TrainerRepositoryToken } from '../domain/trainer-repository';
import {
  TrainerFormTemplateRepository,
  TrainerFormTemplateRepositoryToken,
} from '../domain/trainer-form-template-repository';

@injectable()
export class GetTrainerHiringFormTemplateUseCase {
  constructor(
    @inject(TrainerRepositoryToken) private trainerRepository: TrainerRepository,
    @inject(TrainerFormTemplateRepositoryToken) private trainerFormTemplateRepository: TrainerFormTemplateRepository
  ) {}

  async execute(trainerId: string) {
    const trainer = await this.trainerRepository.findById(trainerId);
    if (!trainer) {
      throw new NotFoundError(`Trainer ID ${trainerId} not found.`);
    }
    if (!trainer.hiringFormTemplateId) {
      return undefined;
    }

    const formTemplate = await this.trainerFormTemplateRepository.findById(trainer.hiringFormTemplateId);
    if (!formTemplate) {
      throw new NotFoundError(
        `Trainer form template ID ${trainer.hiringFormTemplateId} not found for Trainer ID ${trainerId}`
      );
    }
    return formTemplate;
  }
}
