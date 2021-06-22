import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TrainerEntity } from '../../domain/trainer.entity';
import { TrainerRepository, TrainerQuery, TrainerQueryFilter } from '../../domain/trainer.repository';
import { TrainerCollection, TrainerDocument, TrainerModel } from '../models/trainer.model';
import { TrainerDetailsCollection, TrainerDetailsDocument, TrainerDetailsModel } from '../models/trainer-details.model';
import { TrainerReviewCollection, TrainerReviewDocument, TrainerReviewModel } from '../models/trainer-review.model';

const toEntity = (trainer: TrainerDocument): TrainerEntity => {
  return new TrainerEntity(
    trainer.toJSON({
      transform: (doc, ret) => {
        if (doc?.collection?.collectionName === TrainerCollection) {
          ret.id = ret._id;
        }
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    }) as any,
  );
};

@Injectable()
export class TrainerRepositoryImpl implements TrainerRepository {
  constructor(
    @InjectModel(TrainerCollection) private readonly trainerModel: TrainerModel,
    @InjectModel(TrainerDetailsCollection) private readonly trainerDetailsModel: TrainerDetailsModel,
    @InjectModel(TrainerReviewCollection) private readonly trainerReviewModel: TrainerReviewModel,
  ) {}

  private buildPagination(pagination: TrainerQuery['pagination']) {
    return pagination
      ? {
          skip: (pagination.page - 1) * pagination.limit,
          limit: pagination.limit,
        }
      : undefined;
  }

  async findById(id: string): Promise<TrainerEntity | undefined> {
    try {
      const trainer = await this.trainerModel.findById(id).populate('details').exec();
      return trainer ? toEntity(trainer) : undefined;
    } catch {
      return undefined;
    }
  }

  async findAll({ filter, pagination }: TrainerQuery): Promise<TrainerEntity[]> {
    const trainers = await this.trainerModel
      .find(filter ?? {}, null, this.buildPagination(pagination))
      .populate('details')
      .exec();
    return trainers.map(toEntity);
  }

  async count(filter?: TrainerQueryFilter): Promise<number> {
    return await this.trainerModel.countDocuments(filter ?? {});
  }

  async create(trainer: TrainerEntity): Promise<void> {
    let errorMessage: any;
    const session = await this.trainerModel.db.startSession();
    try {
      await session.withTransaction(async () => {
        const [details] = await this.trainerDetailsModel.create(
          [
            {
              qualifications: trainer.details.qualifications,
              specialties: trainer.details.specialties,
              contacts: trainer.details.contacts,
              locations: trainer.details.locations,
              schedules: trainer.details.schedules,
            },
          ],
          {
            session,
          },
        );
        await this.trainerModel.create(
          [
            {
              _id: trainer.id,
              name: trainer.name,
              description: trainer.description,
              image: trainer.image,
              rating: trainer.rating,
              details,
            },
          ],
          {
            session,
          },
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
  }

  async update(trainer: TrainerEntity): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
