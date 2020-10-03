export interface TrainerModel {
  name: string;
  description: string;
  image: string;
  rating: TrainerRatingModel;
  details: TrainerDetailsModel;
}

export interface TrainerRatingModel {
  value: number;
  reviews: number;
}

export interface TrainerDetailsModel {
  qualifications: string;
  specialties: string[];
  contacts: TrainerContactsModel;
  locations: TrainerLocationsModel;
  schedules: TrainerScheduleModel[];
}

export interface TrainerContactsModel {
  email: string;
  whatsapp: string;
}

export interface TrainerLocationsModel {
  isAttendingOnline: boolean;
  isAttendingHome: boolean;
  cities: TrainerCityModel[];
}

export interface TrainerCityModel {
  city: string;
  state: string;
  places: string[];
}

export interface TrainerScheduleModel {
  weekday: Weekday;
  startTime: string;
  endTime: string;
}

export interface TrainerReviewModel {
  trainer: TrainerModel;
  author: string; // TODO: Should be a User
  rating: number;
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
