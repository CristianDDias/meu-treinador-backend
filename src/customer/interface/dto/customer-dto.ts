import { CustomerEntity } from '../../domain/customer-entity';

export interface CustomerDTO {
  id: string;
  name: string;
  email: string;
  phone: string;
  favoriteTrainerIds: string[];
}

export class CustomerDTOAdapter {
  static toCustomerDTO(customer: CustomerEntity): CustomerDTO {
    return {
      id: customer.id,
      name: customer.name,
      email: customer.email,
      phone: customer.phone,
      favoriteTrainerIds: customer.favoriteTrainerIds,
    };
  }
}
