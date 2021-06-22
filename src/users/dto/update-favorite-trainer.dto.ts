import { IsString, IsBoolean } from 'class-validator';

export class UpdateFavoriteTrainerDto {
  @IsString()
  trainerId: string;

  @IsBoolean()
  isFavorite: boolean;
}
