import { Entity, PrimaryColumn, Column, CreateDateColumn } from 'typeorm';
import { TrainerReviewEntity } from '../../domain/trainer-review-entity';

@Entity('trainer_review')
export class TrainerReviewOrm {
  @PrimaryColumn({ type: 'varchar' })
  id: TrainerReviewEntity['id'];

  @Column({ type: 'varchar', name: 'trainer_id' })
  trainerId: TrainerReviewEntity['trainerId'];

  @Column({ type: 'varchar', name: 'customer_id' })
  customerId: TrainerReviewEntity['customerId'];

  @Column({ type: 'real' })
  rating: TrainerReviewEntity['rating'];

  @Column({ type: 'varchar' })
  description: TrainerReviewEntity['description'];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: TrainerReviewEntity['createdAt'];

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
