import { container } from 'tsyringe';
import { createConnection } from 'typeorm';
import { Config } from './config';
import { TrainerRepositoryToken } from './trainer/domain/trainer-repository';
import { TrainerRepositoryImpl } from './trainer/infrastructure/trainer-repository-impl';
import { TrainerReviewRepositoryToken } from './trainer/domain/trainer-review-repository';
import { TrainerReviewRepositoryImpl } from './trainer/infrastructure/trainer-review-repository-impl';
import { CustomerRepositoryToken } from './customer/domain/customer-repository';
import { CustomerRepositoryImpl } from './customer/infrastructure/customer-repository-impl';

export const createContainer = async (config: Config): Promise<void> => {
  await createConnection({ ...config.database });

  container.register(TrainerRepositoryToken, { useClass: TrainerRepositoryImpl });
  container.register(TrainerReviewRepositoryToken, { useClass: TrainerReviewRepositoryImpl });
  container.register(CustomerRepositoryToken, { useClass: CustomerRepositoryImpl });
};
