import { Injectable, Inject } from '@nestjs/common';
import { TrainerRepository, TrainerRepositoryToken } from '../../domain/trainer.repository';

@Injectable()
export class GetTrainerByIdUseCase {
  constructor(@Inject(TrainerRepositoryToken) private readonly trainerRepository: TrainerRepository) {}

  async execute(id: string) {
    return await this.trainerRepository.findById(id);
  }
}
