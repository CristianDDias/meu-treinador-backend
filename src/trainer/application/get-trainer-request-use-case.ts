import { injectable, inject } from 'tsyringe';
import { TrainerRequestRepository, TrainerRequestRepositoryToken } from '../domain/trainer-request-repository';

@injectable()
export class GetTrainerRequestUseCase {
  constructor(@inject(TrainerRequestRepositoryToken) private trainerRequestRepository: TrainerRequestRepository) {}

  async execute({ trainerId, customerId }: { trainerId: string; customerId: string }) {
    return await this.trainerRequestRepository.findCurrent({ trainerId, customerId });
  }
}
