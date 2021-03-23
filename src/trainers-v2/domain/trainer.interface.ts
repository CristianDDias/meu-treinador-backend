export interface Trainer {
  id: string;
  name: string;
  description: string;
  image: string;
  rating: TrainerRating; // TODO: Create value object
  details: TrainerDetails;
}

export interface TrainerRating {
  value: number;
  reviews: number;
}

export interface TrainerDetails {
  qualifications: string;
  specialties: string[];
  contacts: TrainerContacts;
  locations: TrainerLocations;
  schedules: TrainerSchedule[];
}

export interface TrainerContacts {
  email: string; // TODO: Create value object
  whatsapp: string; // TODO: Create value object
}

export interface TrainerLocations {
  isAttendingOnline: boolean;
  isAttendingHome: boolean;
  cities: TrainerCity[];
}

export interface TrainerCity {
  city: string; // TODO: Create value object
  state: string; // TODO: Create value object
  places: string[]; // TODO: Create value object
}

export interface TrainerSchedule {
  weekday: Weekday; // TODO: Create value object
  startTime: string; // TODO: Create value object
  endTime: string; // TODO: Create value object
}

export interface TrainerReview {
  id: string;
  trainer: Trainer;
  author: string; // TODO: Should be a User
  rating: number; // TODO: Create value object
  description: string;
  createdAt: Date;
}

enum Weekday {
  monday = 'monday',
  tuesday = 'tuesday',
  wednesday = 'wednesday',
  thursday = 'thursday',
  friday = 'friday',
  saturday = 'saturday',
  sunday = 'sunday',
}
