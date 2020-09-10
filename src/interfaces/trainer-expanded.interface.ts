import { Trainer } from 'src/interfaces/trainer.interface';
import { TrainerLocation } from 'src/interfaces/trainer-location.interface';
import { TrainerSchedule } from 'src/interfaces/trainer-schedule.interface';
import { TrainerReview } from 'src/interfaces/trainer-review.interface';

export interface TrainerExpanded extends Trainer {
  locations: TrainerLocation[];
  schedules: TrainerSchedule[];
  reviews: TrainerReview[];
}
