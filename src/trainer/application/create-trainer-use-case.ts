import { injectable, inject } from 'tsyringe';
import { Trainer } from '../domain/trainer-interface';
import { TrainerEntity } from '../domain/trainer-entity';
import { TrainerRepository, TrainerRepositoryToken } from '../domain/trainer-repository';

@injectable()
export class CreateTrainerUseCase {
  constructor(@inject(TrainerRepositoryToken) private trainerRepository: TrainerRepository) {}

  async execute(trainer: Trainer) {
    await this.trainerRepository.create(TrainerEntity.create(trainer));
  }
}
