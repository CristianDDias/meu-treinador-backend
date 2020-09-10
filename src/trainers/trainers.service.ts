import { Injectable, NotFoundException } from '@nestjs/common';
import { TrainerExpanded } from 'src/interfaces/trainer-expanded.interface';
import { mock } from './mock';

@Injectable()
export class TrainersService {
  findAll(): TrainerExpanded[] {
    return mock;
  }

  findById(id: string): TrainerExpanded {
    const trainer = mock.find(trainer => trainer.id === id);
    if (!trainer) {
      throw new NotFoundException('Trainer not found.');
    }
    return trainer;
  }
}
