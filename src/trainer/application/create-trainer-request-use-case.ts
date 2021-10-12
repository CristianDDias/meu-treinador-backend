import { injectable, inject } from 'tsyringe';
import { NotFoundError, BusinessError } from '../../shared/error';
import { TrainerRequest, TrainerRequestStatus } from '../domain/trainer-interface';
import { TrainerRequestEntity } from '../domain/trainer-request-entity';
import { TrainerRepository, TrainerRepositoryToken } from '../domain/trainer-repository';
import { TrainerRequestRepository, TrainerRequestRepositoryToken } from '../domain/trainer-request-repository';
import { CustomerComponent } from '../../customer/interface/lib';

@injectable()
export class CreateTrainerRequestUseCase {
  constructor(
    @inject(TrainerRepositoryToken) private trainerRepository: TrainerRepository,
    @inject(TrainerRequestRepositoryToken) private trainerRequestRepository: TrainerRequestRepository,
    private customerComponent: CustomerComponent
  ) {}

  async execute(request: Omit<TrainerRequest, 'status'>) {
    const trainer = await this.trainerRepository.findById(request.trainerId);
    if (!trainer) {
      throw new NotFoundError(`Trainer ID ${request.trainerId} not found.`);
    }
    await this.customerComponent.getCustomerById(request.customerId); // Throws an error when not found

    const currentRequest = await this.trainerRequestRepository.findCurrentRequest({
      trainerId: request.trainerId,
      customerId: request.customerId,
    });
    if (currentRequest) {
      throw new BusinessError(
        `Already exists a request for Trainer ID ${request.trainerId} and Customer ID ${request.customerId}`
      );
    }

    await this.trainerRequestRepository.create(
      TrainerRequestEntity.create({ ...request, status: TrainerRequestStatus.Pending })
    );
  }
}
