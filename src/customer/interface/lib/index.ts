import { injectable } from 'tsyringe';
import { GetCustomerByIdUseCase } from '../../application/get-customer-by-id-use-case';
import { GetCustomersByIdsUseCase } from '../../application/get-customers-by-id-use-case';
import { CustomerDTOAdapter } from '../dto/customer-dto';

@injectable()
export class CustomerComponent {
  constructor(
    private getCustomerByIdUseCase: GetCustomerByIdUseCase,
    private getCustomersByIdsUseCase: GetCustomersByIdsUseCase
  ) {}

  async getCustomerByIdOrFail(id: string) {
    const customer = await this.getCustomerByIdUseCase.execute(id);
    return CustomerDTOAdapter.toCustomerDTO(customer);
  }

  async getCustomersByIds(ids: string[]) {
    const customers = await this.getCustomersByIdsUseCase.execute(ids);
    return customers.map(CustomerDTOAdapter.toCustomerDTO);
  }
}
