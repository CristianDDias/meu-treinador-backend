import { Injectable, Inject } from '@nestjs/common';
import { TrainerRepository, TrainerRepositoryToken, TrainerQuery } from '../../domain/trainer.repository';

@Injectable()
export class GetTrainersUseCase {
  constructor(@Inject(TrainerRepositoryToken) private readonly trainerRepository: TrainerRepository) {}

  async execute({ filter, pagination }: TrainerQuery = {}) {
    return {
      results: await this.trainerRepository.findAll({ filter, pagination }),
      total: await this.trainerRepository.count(filter),
    };
  }
}
