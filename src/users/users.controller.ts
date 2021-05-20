import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Param,
  Body,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './interfaces/users.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: User) {}
  @Get()
  findAll(): string {
    return 'All users';
  }

  @Get()
  findOne(@Param('id') id): string {
    return `#${id}`;
  }

  @Post()
  createUser(@Body() userDto: CreateUserDto) {
    return `User Created ${userDto.name}`;
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() userDto: CreateUserDto) {
    return `Updated ${userDto.name} successfully`;
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return `User ${id} deleted successfully`;
  }
}
