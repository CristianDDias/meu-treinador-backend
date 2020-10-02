import { Controller, Get, Put, Param, Body, NotFoundException, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDocument } from './schemas/user.schema';
import { UpdateFavoriteTrainerDto } from './dto/update-favorite-trainer.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  async findById(@Param('id') id: string) {
    const user = await this.usersService.findById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return this.userToJson(user);
  }

  @Put(':id/favorite-trainer')
  async updateFavoriteTrainer(@Param('id') id: string, @Body() { trainerId, isFavorite }: UpdateFavoriteTrainerDto) {
    try {
      await this.usersService.updateFavoriteTrainer(id, trainerId, isFavorite);
    } catch (error) {
      throw new BadRequestException(error.toString());
    }
  }

  private userToJson(user: UserDocument) {
    return user.toJSON({
      virtuals: true,
      transform: (_, ret) => {
        delete ret.details;
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    });
  }
}
