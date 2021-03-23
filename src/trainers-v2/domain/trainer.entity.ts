import { Trainer, TrainerDetails, TrainerRating } from './trainer.interface';

interface TrainerEntityParams {
  id: string;
  name: string;
  description: string;
  image: string;
  rating: TrainerRating;
  details: TrainerDetails;
}

export class TrainerEntity implements Trainer {
  public readonly id: string;
  public name: string;
  public description: string;
  public image: string;
  public rating: TrainerRating;
  public details: TrainerDetails;

  constructor({ id, name, description, image, rating, details }: TrainerEntityParams) {
    if (!details.contacts?.email && !details.contacts?.whatsapp) {
      throw new Error('Trainer must have at least one contact (email or WhatsApp).');
    }

    if (!details.locations.cities.length) {
      throw new Error('Trainer must have at least one city.');
    }

    this.id = id;
    this.name = name;
    this.description = description;
    this.image = image;
    this.rating = rating;
    this.details = details;
  }
}
