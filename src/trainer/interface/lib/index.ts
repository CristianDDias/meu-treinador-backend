import { injectable } from 'tsyringe';
import { GetTrainersByIdUseCase } from '../../application/get-trainers-by-id-use-case';
import { TrainerDTOAdapter } from '../dto/trainer-dto';

@injectable()
export class TrainerComponent {
  constructor(private getTrainersByIdUseCase: GetTrainersByIdUseCase) {}

  async getTrainersById(ids: string[]) {
    const trainers = await this.getTrainersByIdUseCase.execute(ids);
    return trainers.map(TrainerDTOAdapter.toSimplifiedTrainerDTO);
  }
}
