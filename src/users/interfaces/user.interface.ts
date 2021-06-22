import { TrainerModel } from 'src/trainers/interfaces/trainer.interface';

export interface UserModel {
  name: string;
  favoriteTrainers: TrainerModel[];
}
