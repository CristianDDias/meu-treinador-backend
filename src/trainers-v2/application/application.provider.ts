import { GetTrainersUseCase } from './use-cases/get-trainers.use-case';
import { GetTrainerByIdUseCase } from './use-cases/get-trainer-by-id.use-case';

export const applicationProviders = [GetTrainersUseCase, GetTrainerByIdUseCase];
