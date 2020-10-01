import { Controller, Get, Post, Param, Query, Body, BadRequestException, NotFoundException } from '@nestjs/common';
import { TrainersService } from './trainers.service';
import { TrainerCollection, TrainerDocument, TrainerModel } from './schemas/trainer.schema';
import { TrainerReviewDocument } from './schemas/trainer-review.schema';
import { trainerValidationSchema } from './schemas/validations/trainer.validation';

@Controller('trainers')
export class TrainersController {
  constructor(private readonly trainersService: TrainersService) {}

  @Get()
  async findAll(@Query('details') details: boolean, @Query('name') name: string) {
    const filters: Partial<TrainerModel> = { name };
    const trainers = await this.trainersService.findAll(details, filters);
    return trainers.map(trainer => this.trainerToJson(trainer, details));
  }

  @Get(':id')
  async findById(@Param('id') id: string, @Query('details') details: boolean) {
    const trainer = await this.trainersService.findById(id, details);
    if (!trainer) {
      throw new NotFoundException('Trainer not found');
    }
    return this.trainerToJson(trainer, details);
  }

  @Get(':id/reviews')
  async findReviews(@Param('id') id: string) {
    const reviews = await this.trainersService.findReviews(id);
    return reviews.map(this.trainerReviewToJson);
  }

  @Post()
  async create(@Body() trainerDTO: TrainerModel) {
    try {
      await trainerValidationSchema.validateAsync(trainerDTO);
      const trainer = await this.trainersService.create(trainerDTO);
      return this.trainerToJson(trainer, true);
    } catch (error) {
      throw new BadRequestException(error.toString());
    }
  }

  private trainerToJson(trainer: TrainerDocument, details: boolean) {
    return trainer.toJSON({
      virtuals: true,
      transform: (doc, ret) => {
        const collection = doc?.collection?.collectionName;

        if (collection === TrainerCollection && !details) {
          delete ret.details;
        }

        if (collection !== TrainerCollection) {
          delete ret.id;
        }

        delete ret._id;
        delete ret.__v;

        return ret;
      },
    });
  }

  private trainerReviewToJson(trainerReview: TrainerReviewDocument) {
    return trainerReview.toJSON({
      virtuals: true,
      transform: (_, ret) => {
        delete ret._id;
        delete ret.__v;
        delete ret.trainer;
        return ret;
      },
    });
  }
}
