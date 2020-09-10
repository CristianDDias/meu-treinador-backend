export interface Trainer {
  id: string;
  name: string;
  description: string;
  img: string;
  rating: {
    value: number;
    reviews: number;
  };
  contact: {
    email: string;
    whatsapp: string;
  };
  isFavorite: boolean;
}
