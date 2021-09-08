import { injectable, inject } from 'tsyringe';
import { NotFoundError } from '../../shared/error';
import { TrainerRepository, TrainerRepositoryToken } from '../domain/trainer-repository';

@injectable()
export class GetTrainerByIdUseCase {
  constructor(@inject(TrainerRepositoryToken) private trainerRepository: TrainerRepository) {}

  async execute(id: string) {
    const trainer = await this.trainerRepository.findById(id);
    if (!trainer) {
      throw new NotFoundError(`Trainer ID ${id} not found.`);
    }
    return trainer;
  }
}
