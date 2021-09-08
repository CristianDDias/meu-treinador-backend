import { injectable, inject } from 'tsyringe';
import { TrainerRepository, TrainerRepositoryToken, TrainerQuery } from '../domain/trainer-repository';

@injectable()
export class GetTrainersUseCase {
  constructor(@inject(TrainerRepositoryToken) private trainerRepository: TrainerRepository) {}

  async execute({ filter, pagination }: TrainerQuery = {}) {
    return {
      results: await this.trainerRepository.findAll({ filter, pagination }),
      total: await this.trainerRepository.count(filter),
    };
  }
}
