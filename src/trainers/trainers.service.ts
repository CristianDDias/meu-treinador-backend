import { ClientSession, FilterQuery, Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TrainerCollection, TrainerDocument, TrainerModel } from './schemas/trainer.schema';
import { TrainerDetailsCollection, TrainerDetailsDocument, TrainerDetailsModel } from './schemas/trainer-details.schema';
import { TrainerReviewCollection, TrainerReviewDocument } from './schemas/trainer-review.schema';

@Injectable()
export class TrainersService {
  constructor(
    @InjectModel(TrainerCollection)
    private readonly trainerDocument: Model<TrainerDocument>,
    @InjectModel(TrainerDetailsCollection)
    private readonly trainerDetailsDocument: Model<TrainerDetailsDocument>,
    @InjectModel(TrainerReviewCollection)
    private readonly trainerReviewDocument: Model<TrainerReviewDocument>,
  ) {}

  async findAll(details: boolean, filters: Partial<TrainerModel>): Promise<TrainerDocument[]> {
    const filterQuery: FilterQuery<TrainerDocument> = {};
    if (filters.name) {
      filterQuery.name = new RegExp(filters.name, 'i');
    }

    const query = this.trainerDocument.find(filterQuery);
    if (details) {
      query.populate('details');
    }
    try {
      return await query.exec();
    } catch {
      return [];
    }
  }

  async findById(id: string, details: boolean): Promise<TrainerDocument | null> {
    const query = this.trainerDocument.findById(id);
    if (details) {
      query.populate('details');
    }
    try {
      return await query.exec();
    } catch {
      return null;
    }
  }

  async findReviews(id: string): Promise<TrainerReviewDocument[]> {
    try {
      return await this.trainerReviewDocument.find({ trainer: id as any }).exec();
    } catch {
      return [];
    }
  }

  async create(trainer: TrainerModel): Promise<TrainerDocument> {
    let newTrainer;
    let errorMessage;

    const session = await this.trainerDocument.db.startSession();
    try {
      await session.withTransaction(async () => {
        newTrainer = await this.createTrainer(
          session,
          trainer,
          await this.createTrainerDetails(
            session,
            trainer.details
          ),
        );
      });
    } catch (error) {
      errorMessage = error.message;
    } finally {
      session.endSession();
    }

    if (errorMessage) {
      throw new Error(errorMessage);
    }

    return newTrainer;
  }

  private async createTrainer(session: ClientSession, trainer: TrainerModel, trainerDetails: TrainerDetailsDocument) {
    return (await this.trainerDocument.create(
      [{ ...trainer, details: trainerDetails }],
      { session })
    )[0];
  }

  private async createTrainerDetails(session: ClientSession, trainerDetails: TrainerDetailsModel) {
    return (await this.trainerDetailsDocument.create(
      [trainerDetails],
      { session })
    )[0];
  }
}
