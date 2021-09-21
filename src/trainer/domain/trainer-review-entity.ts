import { v4 as uuid } from 'uuid';
import { TrainerReview } from './trainer-interface';
import { Guard } from '../../shared/guard';

export class TrainerReviewEntity implements TrainerReview {
  id: string;
  trainerId: TrainerReview['trainerId'];
  customerId: TrainerReview['customerId'];
  rating: TrainerReview['rating'];
  description: TrainerReview['description'];
  createdAt: TrainerReview['createdAt'];

  private constructor(props: TrainerReview, id?: string) {
    this.id = id ?? uuid();
    this.trainerId = props.trainerId;
    this.customerId = props.customerId;
    this.rating = props.rating;
    this.description = props.description;
    this.createdAt = props.createdAt;
  }

  static create(props: TrainerReview, id?: string): TrainerReviewEntity {
    const guardResult = Guard.againstEmptyBulk([
      { value: props.trainerId, key: 'trainerId' },
      { value: props.customerId, key: 'customerId' },
      { value: props.rating, key: 'rating' },
      { value: props.description, key: 'description' },
      { value: props.createdAt, key: 'createdAt' },
    ]);
    if (guardResult.error) {
      throw new Error(`Trainer review validation failed: ${guardResult.message}`);
    }
    if (props.rating < 1 || props.rating > 5) {
      throw new Error(`Trainer review validation failed: rating should be between 1 and 5 (rating ${props.rating})`);
    }
    return new TrainerReviewEntity(props, id);
  }
}
