import { v4 as uuid } from 'uuid';
import { Trainer } from './trainer-interface';
import { Guard } from '../../shared/guard';

export class TrainerEntity implements Trainer {
  id: string;
  name: Trainer['name'];
  description: Trainer['description'];
  image: Trainer['image'];
  rating: Trainer['rating'];
  qualifications: Trainer['qualifications'];
  specialties: Trainer['specialties'];
  contacts: Trainer['contacts'];
  locations: Trainer['locations'];
  schedules: Trainer['schedules'];

  private constructor(props: Trainer, id?: string) {
    this.id = id ?? uuid();
    this.name = props.name;
    this.description = props.description;
    this.image = props.image;
    this.rating = props.rating;
    this.qualifications = props.qualifications;
    this.specialties = props.specialties;
    this.contacts = props.contacts;
    this.locations = props.locations;
    this.schedules = props.schedules;
  }

  static create(props: Trainer, id?: string): TrainerEntity {
    const guardResult = Guard.againstEmptyBulk([
      { value: props.name, key: 'name' },
      { value: props.description, key: 'description' },
      { value: props.image, key: 'image' },
      { value: props.qualifications, key: 'qualifications' },
      { value: props.specialties, key: 'specialties' },
      { value: props.contacts.email, key: 'email' },
      { value: props.contacts.phone, key: 'phone' },
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
