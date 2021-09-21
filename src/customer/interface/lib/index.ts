import { injectable } from 'tsyringe';
import { GetCustomerByIdUseCase } from '../../application/get-customer-by-id-use-case';
import { GetCustomersByIdUseCase } from '../../application/get-customers-by-id-use-case';
import { CustomerDTOAdapter } from '../dto/customer-dto';

@injectable()
export class CustomerComponent {
  constructor(
    private getCustomerByIdUseCase: GetCustomerByIdUseCase,
    private getCustomersByIdUseCase: GetCustomersByIdUseCase
  ) {}

  async getCustomerById(id: string) {
    const customer = await this.getCustomerByIdUseCase.execute(id);
    return CustomerDTOAdapter.toCustomerDTO(customer);
  }

  async getCustomersById(ids: string[]) {
    const customers = await this.getCustomersByIdUseCase.execute(ids);
    return customers.map(CustomerDTOAdapter.toCustomerDTO);
  }
}
