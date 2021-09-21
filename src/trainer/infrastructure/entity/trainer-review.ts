import { Entity, PrimaryColumn, Column, CreateDateColumn } from 'typeorm';
import { TrainerReviewEntity } from '../../domain/trainer-review-entity';

@Entity('trainer_review')
export class TrainerReviewOrm {
  @PrimaryColumn()
  id: string;

  @Column({ name: 'trainer_id' })
  trainerId: string;

  @Column({ name: 'customer_id' })
  customerId: string;

  @Column()
  rating: number;

  @Column()
  description: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  static fromDomain(review: TrainerReviewEntity): TrainerReviewOrm {
    const orm = new TrainerReviewOrm();
    orm.id = review.id;
    orm.trainerId = review.trainerId;
    orm.customerId = review.customerId;
    orm.rating = review.rating;
    orm.description = review.description;
    orm.createdAt = review.createdAt;
    return orm;
  }

  toDomain(): TrainerReviewEntity {
    return TrainerReviewEntity.create(
      {
        trainerId: this.trainerId,
        customerId: this.customerId,
        rating: this.rating,
        description: this.description,
        createdAt: this.createdAt,
      },
      this.id
    );
  }
}
