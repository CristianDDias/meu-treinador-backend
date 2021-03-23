import { Provider } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrainerCollection, TrainerSchema } from './models/trainer.model';
import { TrainerDetailsCollection, TrainerDetailsSchema } from './models/trainer-details.model';
import { TrainerReviewCollection, TrainerReviewSchema } from './models/trainer-review.model';
import { TrainerRepositoryImpl } from './repositories/trainer.repository.impl';
import { TrainerRepositoryToken } from '../domain/trainer.repository';

export const infrastructureProviders: Provider[] = [
  {
    provide: TrainerRepositoryToken,
    useClass: TrainerRepositoryImpl,
  },
];

export const modelsProviders = [
  MongooseModule.forFeature([
    { name: TrainerCollection, schema: TrainerSchema },
    { name: TrainerDetailsCollection, schema: TrainerDetailsSchema },
    { name: TrainerReviewCollection, schema: TrainerReviewSchema },
  ]),
];
