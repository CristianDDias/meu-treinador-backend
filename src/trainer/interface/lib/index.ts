import { injectable } from 'tsyringe';
import { GetTrainerByIdUseCase } from '../../application/get-trainer-by-id-use-case';
import { GetTrainersByIdUseCase } from '../../application/get-trainers-by-id-use-case';
import { TrainerDTOAdapter } from '../dto/trainer-dto';

@injectable()
export class TrainerComponent {
  constructor(
    private getTrainerByIdUseCase: GetTrainerByIdUseCase,
    private getTrainersByIdUseCase: GetTrainersByIdUseCase
  ) {}

  async getTrainerById(id: string) {
    const trainer = await this.getTrainerByIdUseCase.execute(id);
    return TrainerDTOAdapter.toSimplifiedTrainerDTO(trainer);
  }

  async getTrainersById(ids: string[]) {
    const trainers = await this.getTrainersByIdUseCase.execute(ids);
    return trainers.map(TrainerDTOAdapter.toSimplifiedTrainerDTO);
  }
}
