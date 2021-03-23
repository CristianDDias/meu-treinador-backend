import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { GetTrainerByIdUseCase } from '../../application/use-cases/get-trainer-by-id.use-case';
import { TrainerDTOAdapter } from '../dtos/trainer.dto';

@Controller('test/trainers')
export class GetTrainerByIdController {
  constructor(private readonly useCase: GetTrainerByIdUseCase) {}

  @Get(':id')
  async execute(@Param('id') id: string) {
    const trainer = await this.useCase.execute(id);
    if (!trainer) {
      throw new NotFoundException(`Trainer ID ${id} not found.`);
    }
    return TrainerDTOAdapter.toDetailedTrainerDTO(trainer);
  }
}
