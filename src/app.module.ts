import { Module } from '@nestjs/common';
import { TrainersModule } from './trainers/trainers.module';

@Module({
  imports: [TrainersModule],
})
export class AppModule {}
