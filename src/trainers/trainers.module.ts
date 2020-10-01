import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrainersController } from './trainers.controller';
import { TrainersService } from './trainers.service';
import { TrainerCollection, TrainerSchema } from './schemas/trainer.schema';
import { TrainerDetailsCollection, TrainerDetailsSchema } from './schemas/trainer-details.schema';
import { TrainerReviewCollection, TrainerReviewSchema } from './schemas/trainer-review.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TrainerCollection, schema: TrainerSchema },
      { name: TrainerDetailsCollection, schema: TrainerDetailsSchema },
      { name: TrainerReviewCollection, schema: TrainerReviewSchema },
    ]),
  ],
  controllers: [TrainersController],
  providers: [TrainersService],
})
export class TrainersModule {}
