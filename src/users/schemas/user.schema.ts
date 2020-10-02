import { Document, Schema, Types } from 'mongoose';
import { TrainerCollection, TrainerDocument, TrainerModel } from '../../trainers/schemas/trainer.schema';

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

export interface UserModel {
  name: string;
  favoriteTrainers: TrainerModel[];
}

export interface UserDocument extends Omit<UserModel, 'favoriteTrainers'>, Document {
  favoriteTrainers: Types.Array<TrainerDocument>;
}
