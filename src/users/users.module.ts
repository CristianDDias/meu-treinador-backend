import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserCollection, UserSchema } from './schemas/user.schema';
import { TrainerCollection, TrainerSchema } from '../trainers/schemas/trainer.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserCollection, schema: UserSchema },
      { name: TrainerCollection, schema: TrainerSchema },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
