// TODO: Create value objects or classes

export interface Trainer {
  name: string;
  description: string;
  image: string;
  gender: Gender;
  ethnicity: Ethnicity;
  price: number;
  rating?: TrainerRating;
  qualifications: string;
  specialties: string[];
  contacts: TrainerContacts;
  locations: TrainerLocations;
  schedules?: TrainerSchedule[];
  paymentMethods: PaymentMethod[];
}

export interface TrainerRating {
  value: number;
  reviews: number;
}

export interface TrainerContacts {
  email: string;
  phone: string;
}

export interface TrainerLocations {
  isProvidingOnlineService: boolean;
  isProvidingInHomeService: boolean;
  cities?: TrainerCity[];
}

export interface TrainerCity {
  city: string;
  state: string;
  places?: string[];
}

export interface TrainerSchedule {
  weekday: Weekday;
  startTime: string;
  endTime: string;
}

export interface TrainerReview {
  trainerId: string;
  customerId: string;
  rating: number;
  description: string;
  createdAt: Date;
}

type Weekday = 'Segunda' | 'Terça' | 'Quarta' | 'Quinta' | 'Sexta' | 'Sábado' | 'Domingo';

type Gender = 'Feminino' | 'Masculino' | 'Não binário';

type Ethnicity = 'Amarela' | 'Branca' | 'Indígena' | 'Parda' | 'Preta';

type PaymentMethod = 'Boleto' | 'Cartão de crédito' | 'Cartão de débito' | 'Dinheiro' | 'PIX';

export const weekdayOptions: Weekday[] = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

export const genderOptions: Gender[] = ['Feminino', 'Masculino', 'Não binário'];

export const ethnicityOptions: Ethnicity[] = ['Amarela', 'Branca', 'Indígena', 'Parda', 'Preta'];

export const paymentMethodOptions: PaymentMethod[] = [
  'Boleto',
  'Cartão de crédito',
  'Cartão de débito',
  'Dinheiro',
  'PIX',
];
