import { injectable } from 'tsyringe';
import { GetTrainerByIdUseCase } from '../../application/get-trainer-by-id-use-case';
import { GetTrainersByIdsUseCase } from '../../application/get-trainers-by-ids-use-case';
import { TrainerDTOAdapter } from '../dto/trainer-dto';

@injectable()
export class TrainerComponent {
  constructor(
    private getTrainerByIdUseCase: GetTrainerByIdUseCase,
    private getTrainersByIdsUseCase: GetTrainersByIdsUseCase
  ) {}

  async getTrainerById(id: string) {
    const trainer = await this.getTrainerByIdUseCase.execute(id);
    return TrainerDTOAdapter.toSimplifiedTrainerDTO(trainer);
  }

  async getTrainersByIds(ids: string[]) {
    const trainers = await this.getTrainersByIdsUseCase.execute(ids);
    return trainers.map(TrainerDTOAdapter.toSimplifiedTrainerDTO);
  }
}
