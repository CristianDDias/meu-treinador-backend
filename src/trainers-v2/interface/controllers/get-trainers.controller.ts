import { Controller, Get, Query, DefaultValuePipe } from '@nestjs/common';
import { GetTrainersUseCase } from '../../application/use-cases/get-trainers.use-case';
import { TrainerDTOAdapter, SimplifiedTrainerDTO, Pagination } from '../dtos/trainer.dto';
import { TrainerQueryFilter } from '../../domain/trainer.repository';
import { ParsePaginationPipe } from '../pipes/parse-pagination.pipe';

@Controller('test/trainers')
export class GetTrainersController {
  constructor(private readonly useCase: GetTrainersUseCase) {}

  @Get()
  async execute(
    @Query('page', new DefaultValuePipe(1), ParsePaginationPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParsePaginationPipe) limit: number,
    @Query('name') name?: string,
  ) {
    const { results, total } = await this.useCase.execute({
      filter: this.buildFilter(name),
      pagination: { page, limit },
    });

    return {
      results: results.map(TrainerDTOAdapter.toSimplifiedTrainerDTO),
      limit,
      page,
      totalPages: Math.ceil(total / limit),
    } as Pagination<SimplifiedTrainerDTO>;
  }

  private buildFilter(name?: string) {
    const filter: TrainerQueryFilter = {};
    if (name) {
      filter.name = new RegExp(name, 'i');
    }
    return filter;
  }
}
