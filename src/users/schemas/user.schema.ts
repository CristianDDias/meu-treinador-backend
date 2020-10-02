import { Document, Schema, Types } from 'mongoose';
import { TrainerCollection, TrainerDocument } from '../../trainers/schemas/trainer.schema';
import { UserModel } from '../interfaces/user.interface';

export const UserCollection = 'users';

export const UserSchema = new Schema(
  {
    name: String,
    favoriteTrainers: [
      {
        type: Schema.Types.ObjectId,
        ref: TrainerCollection,
      },
    ],
  },
  {
    collection: UserCollection,
  },
);

export interface UserDocument extends Omit<UserModel, 'favoriteTrainers'>, Document {
  favoriteTrainers: Types.Array<TrainerDocument>;
}
