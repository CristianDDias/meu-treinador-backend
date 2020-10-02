import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserCollection, UserDocument } from './schemas/user.schema';
import { TrainerCollection, TrainerDocument } from 'src/trainers/schemas/trainer.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UserCollection)
    private readonly userDocument: Model<UserDocument>,
    @InjectModel(TrainerCollection)
    private readonly trainerDocument: Model<TrainerDocument>,
  ) {}

  async findById(id: string): Promise<UserDocument | null> {
    try {
      return await this.userDocument.findById(id).populate('favoriteTrainers');
    } catch {
      return null;
    }
  }

  async updateFavoriteTrainer(id: string, trainerId: string, isFavorite: boolean): Promise<void> {
    const user = await this.userDocument.findById(id);
    if (!user) {
      throw new Error('User not found');
    }
    if (!(await this.trainerDocument.exists({ _id: trainerId }))) {
      throw new Error('Trainer not found');
    }
    if (isFavorite) {
      user.favoriteTrainers.addToSet(trainerId);
    } else {
      user.favoriteTrainers.remove(trainerId);
    }
    await user.save();
  }
}
