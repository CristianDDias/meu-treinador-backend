import { TrainerEntity } from '../../domain/trainer.entity';

export interface Pagination<T> {
  results: T[];
  limit: number;
  page: number;
  totalPages: number;
}

export interface SimplifiedTrainerDTO {
  id: string;
  name: string;
  description: string;
  image: string;
  rating: {
    value: number;
    reviews: number;
  };
}

export interface DetailedTrainerDTO extends SimplifiedTrainerDTO {
  details: {
    qualifications: string;
    specialties: string[];
    contacts: {
      email: string;
      whatsapp: string;
    };
    locations: {
      isAttendingOnline: boolean;
      isAttendingHome: boolean;
      cities: {
        city: string;
        state: string;
        places: string[];
      }[];
    };
    schedules: {
      weekday: string;
      startTime: string;
      endTime: string;
    }[];
  };
}

export class TrainerDTOAdapter {
  static toSimplifiedTrainerDTO(trainer: TrainerEntity): SimplifiedTrainerDTO {
    return {
      id: trainer.id,
      name: trainer.name,
      description: trainer.description,
      image: trainer.image,
      rating: trainer.rating,
    };
  }

  static toDetailedTrainerDTO(trainer: TrainerEntity): DetailedTrainerDTO {
    return {
      id: trainer.id,
      name: trainer.name,
      description: trainer.description,
      image: trainer.image,
      rating: trainer.rating,
      details: trainer.details,
    };
  }
}
