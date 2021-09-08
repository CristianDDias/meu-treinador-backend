import { v4 as uuid } from 'uuid';
import { Customer } from './customer-interface';
import { Guard } from '../../shared/guard';

export class CustomerEntity implements Customer {
  id: string;
  name: Customer['name'];
  email: Customer['email'];
  phone: Customer['phone'];
  favoriteTrainerIds: Customer['favoriteTrainerIds'];

  private constructor(props: Customer, id?: string) {
    this.id = id ?? uuid();
    this.name = props.name;
    this.email = props.email;
    this.phone = props.phone;
    this.favoriteTrainerIds = props.favoriteTrainerIds;
  }

  static create(props: Customer, id?: string): CustomerEntity {
    const guardResult = Guard.againstEmptyBulk([
      { value: props.name, key: 'name' },
      { value: props.email, key: 'email' },
      { value: props.phone, key: 'phone' },
    ]);
    if (guardResult.error) {
      throw new Error(`Customer validation failed: ${guardResult.message}`);
    }
    return new CustomerEntity(props, id);
  }

  addFavoriteTrainer(trainerId: string): void {
    if (!this.favoriteTrainerIds.includes(trainerId)) {
      this.favoriteTrainerIds.push(trainerId);
    }
  }

  removeFavoriteTrainer(trainerId: string): void {
    this.favoriteTrainerIds = this.favoriteTrainerIds.filter((id) => id !== trainerId);
  }
}
