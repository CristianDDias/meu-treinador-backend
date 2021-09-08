import { injectable } from 'tsyringe';
import { GetCustomersByIdUseCase } from '../../application/get-customers-by-id-use-case';
import { CustomerDTOAdapter } from '../dto/customer-dto';

@injectable()
export class CustomerComponent {
  constructor(private getCustomersByIdUseCase: GetCustomersByIdUseCase) {}

  async getCustomersById(ids: string[]) {
    const customers = await this.getCustomersByIdUseCase.execute(ids);
    return customers.map(CustomerDTOAdapter.toCustomerDTO);
  }
}
