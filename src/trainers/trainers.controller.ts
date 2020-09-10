import { Controller, Get, Param, Query } from '@nestjs/common';
import { TrainersService } from './trainers.service';
import { Trainer } from 'src/interfaces/trainer.interface';
import { TrainerExpanded } from 'src/interfaces/trainer-expanded.interface';
import { TrainerLocation } from 'src/interfaces/trainer-location.interface';
import { TrainerSchedule } from 'src/interfaces/trainer-schedule.interface';
import { TrainerReview } from 'src/interfaces/trainer-review.interface';

@Controller('trainers')
export class TrainersController {
  private readonly trainersService: TrainersService;

  constructor(trainersService: TrainersService) {
    this.trainersService = trainersService;
  }

  @Get()
  findAll(@Query('expand') expand: boolean): Trainer[] | TrainerExpanded[] {
    const result = this.trainersService.findAll();
    if (expand) {
      return result;
    }
    return result.map(this.extractTrainerFromTrainerExpanded);
  }

  @Get(':id')
  findById(@Param('id') id: string, @Query('expand') expand: boolean): Trainer | TrainerExpanded {
    const result = this.trainersService.findById(id);
    if (expand) {
      return result;
    }
    return this.extractTrainerFromTrainerExpanded(result);
  }

  @Get(':id/locations')
  findLocations(@Param('id') id: string): TrainerLocation[] {
    const result = this.trainersService.findById(id);
    return result.locations;
  }

  @Get(':id/schedules')
  findSchedules(@Param('id') id: string): TrainerSchedule[] {
    const result = this.trainersService.findById(id);
    return result.schedules;
  }

  @Get(':id/reviews')
  findReviews(@Param('id') id: string): TrainerReview[] {
    const result = this.trainersService.findById(id);
    return result.reviews;
  }

  private extractTrainerFromTrainerExpanded(trainerExpanded: TrainerExpanded): Trainer {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { locations, schedules, reviews, ...trainer } = trainerExpanded;
    return trainer;
  }
}
