// #TODO: Create value objects or classes

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
  hiringFormTemplateId?: string;
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

export interface TrainerFormQuestion {
  type: QuestionType;
  question: string;
  options?: string[];
}

export interface TrainerFormAnswer extends TrainerFormQuestion {
  answer: string | string[];
}

export interface TrainerFormTemplate {
  trainerId: string;
  name: string;
  form: TrainerFormQuestion[];
}

export interface TrainerRequest {
  trainerId: string;
  customerId: string;
  status: TrainerRequestStatus;
  form: TrainerFormAnswer[];
}

export enum TrainerRequestStatus {
  Pending = 'pending',
  Accepted = 'accepted',
  Declined = 'declined',
}

export enum QuestionType {
  SingleChoice = 'single-choice',
  MultipleChoice = 'multiple-choice',
  Text = 'text',
}

export enum Weekday {
  Segunda = 'Segunda',
  Terca = 'Terça',
  Quarta = 'Quarta',
  Quinta = 'Quinta',
  Sexta = 'Sexta',
  Sabado = 'Sábado',
  Domingo = 'Domingo',
}

export enum Gender {
  Feminino = 'Feminino',
  Masculino = 'Masculino',
  NaoBinario = 'Não binário',
}

export enum Ethnicity {
  Amarela = 'Amarela',
  Branca = 'Branca',
  Indigena = 'Indígena',
  Parda = 'Parda',
  Preta = 'Preta',
}

export enum PaymentMethod {
  Boleto = 'Boleto',
  CartaoCredito = 'Cartão de crédito',
  CartaoDebito = 'Cartão de débito',
  Dinheiro = 'Dinheiro',
  PIX = 'PIX',
}

export const weekdayOptions = Object.values(Weekday);

export const genderOptions = Object.values(Gender);

export const ethnicityOptions = Object.values(Ethnicity);

export const paymentMethodOptions = Object.values(PaymentMethod);

export const questionTypeOptions = Object.values(QuestionType);
