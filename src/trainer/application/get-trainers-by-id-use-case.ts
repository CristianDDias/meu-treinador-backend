import { injectable, inject } from 'tsyringe';
import { TrainerRepository, TrainerRepositoryToken } from '../domain/trainer-repository';

@injectable()
export class GetTrainersByIdUseCase {
  constructor(@inject(TrainerRepositoryToken) private trainerRepository: TrainerRepository) {}

  async execute(ids: string[]) {
    return await this.trainerRepository.findAllById(ids);
  }
}
