import { injectable } from 'tsyringe';
import { Controller, Route, Joi } from '../../../shared/infrastructure/http/controller/controller-router';
import { GetCustomerByIdUseCase } from '../../application/get-customer-by-id-use-case';
import { CustomerDTOAdapter } from '../dto/customer-dto';

@injectable()
export class GetCustomerByIdController implements Controller {
  route: Route = {
    method: 'get',
    path: '/customers/:id',
    auth: {
      authentication: 'customer',
    },
    schema: {
      params: {
        id: Joi.string().uuid(),
      },
    },
  };

  constructor(private useCase: GetCustomerByIdUseCase) {}

  async execute(params: Record<string, any>) {
    const customer = await this.useCase.execute(params.id);
    return CustomerDTOAdapter.toCustomerDTO(customer);
  }
}
