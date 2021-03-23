import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TrainersModule } from './trainers/trainers.module';
import { UsersModule } from './users/users.module';

import { TrainersModuleV2 } from './trainers-v2/trainers.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URL || ''),
    TrainersModule,
    UsersModule,
    TrainersModuleV2,
  ],
})
export class AppModule {}
