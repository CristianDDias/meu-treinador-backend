import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParsePaginationPipe implements PipeTransform<string, number> {
  transform(value: string, metadata: ArgumentMetadata): number {
    const parsedValue = Number(value);
    if (Number.isNaN(parsedValue)) {
      throw new BadRequestException(`"${metadata.data}" must be a number.`);
    }
    if (parsedValue < 1) {
      throw new BadRequestException(`"${metadata.data}" must be greater than 1.`);
    }
    return parsedValue;
  }
}
