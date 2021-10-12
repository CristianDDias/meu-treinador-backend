import { injectable, inject } from 'tsyringe';
import { NotFoundError } from '../../shared/error';
import { TrainerRepository, TrainerRepositoryToken } from '../domain/trainer-repository';
import {
  TrainerFormTemplateRepository,
  TrainerFormTemplateRepositoryToken,
} from '../domain/trainer-form-template-repository';

@injectable()
export class UpdateTrainerHiringFormTemplateUseCase {
  constructor(
    @inject(TrainerRepositoryToken) private trainerRepository: TrainerRepository,
    @inject(TrainerFormTemplateRepositoryToken) private trainerFormTemplateRepository: TrainerFormTemplateRepository
  ) {}

  async execute({ trainerId, formTemplateId }: { trainerId: string; formTemplateId: string }) {
    const trainer = await this.trainerRepository.findById(trainerId);
    if (!trainer) {
      throw new NotFoundError(`Trainer ID ${trainerId} not found.`);
    }
    const formTemplate = await this.trainerFormTemplateRepository.findById(formTemplateId);
    if (!formTemplate) {
      throw new NotFoundError(`Trainer form template ID ${formTemplateId} not found.`);
    }

    trainer.hiringFormTemplateId = formTemplateId;
    await this.trainerRepository.update(trainer);
  }
}
