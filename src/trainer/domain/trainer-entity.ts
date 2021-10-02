import { v4 as uuid } from 'uuid';
import { Trainer } from './trainer-interface';
import { Guard } from '../../shared/guard';

export class TrainerEntity implements Trainer {
  id: string;
  name: Trainer['name'];
  description: Trainer['description'];
  image: Trainer['image'];
  gender: Trainer['gender'];
  ethnicity: Trainer['ethnicity'];
  price: Trainer['price'];
  rating: Trainer['rating'];
  qualifications: Trainer['qualifications'];
  specialties: Trainer['specialties'];
  contacts: Trainer['contacts'];
  locations: Trainer['locations'];
  schedules: Trainer['schedules'];
  paymentMethods: Trainer['paymentMethods'];

  private constructor(props: Trainer, id?: string) {
    this.id = id ?? uuid();
    this.name = props.name;
    this.description = props.description;
    this.image = props.image;
    this.gender = props.gender;
    this.ethnicity = props.ethnicity;
    this.price = props.price;
    this.rating = props.rating;
    this.qualifications = props.qualifications;
    this.specialties = props.specialties;
    this.contacts = props.contacts;
    this.locations = props.locations;
    this.schedules = props.schedules;
    this.paymentMethods = props.paymentMethods;
  }

  static create(props: Trainer, id?: string): TrainerEntity {
    const guardResult = Guard.againstEmptyBulk([
      { value: props.name, key: 'name' },
      { value: props.description, key: 'description' },
      { value: props.image, key: 'image' },
      { value: props.gender, key: 'gender' },
      { value: props.ethnicity, key: 'ethnicity' },
      { value: props.price, key: 'price' },
      { value: props.qualifications, key: 'qualifications' },
      { value: props.specialties, key: 'specialties' },
      { value: props.contacts.email, key: 'email' },
      { value: props.contacts.phone, key: 'phone' },
      { value: props.paymentMethods, key: 'paymentMethods' },
    ]);
    if (guardResult.error) {
      throw new Error(`Trainer validation failed: ${guardResult.message}`);
    }
    if (!id && props.rating) {
      throw new Error('Trainer validation failed: rating should be empty for a new trainer');
    }
    return new TrainerEntity(props, id);
  }
}
