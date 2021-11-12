import { injectable, inject } from 'tsyringe';
import { NotFoundError } from '../../shared/error';
import { TrainerRequestStatus } from '../domain/trainer-interface';
import { TrainerRequestRepository, TrainerRequestRepositoryToken } from '../domain/trainer-request-repository';

@injectable()
export class AcceptTrainerRequestUseCase {
  constructor(@inject(TrainerRequestRepositoryToken) private trainerRequestRepository: TrainerRequestRepository) {}

  async execute({ trainerId, customerId }: { trainerId: string; customerId: string }) {
    const request = await this.trainerRequestRepository.findCurrent({ trainerId, customerId });
    if (!request) {
      throw new NotFoundError(`Trainer request for trainer ID ${trainerId} and customer ID ${customerId} not found.`);
    }

    request.status = TrainerRequestStatus.Accepted;
    await this.trainerRequestRepository.update(request);
  }
}
