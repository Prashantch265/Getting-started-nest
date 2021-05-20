import { Injectable } from '@nestjs/common';
import { User } from './interfaces/users.interface';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: '1',
      name: 'Prashant',
      age: 19,
    },
    {
      id: '2',
      name: 'Ashim',
      age: 21,
    },
  ];

  findAll(): User[] {
    return this.users;
  }
}
