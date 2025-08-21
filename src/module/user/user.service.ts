import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDTO } from './dto/CreateUserDTO';
import { UpdateUserDTO } from './dto/UpdateUserDTO';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  create(createUserInput: CreateUserDTO): Promise<User> {
    const user = this.userRepo.create(createUserInput);
    return this.userRepo.save(user);
  }

  findAll(): Promise<User[]> {
    return this.userRepo.find();
  }

  findOne(id: string): Promise<User> {
    return this.userRepo.findOneBy({ id });
  }

  async update(id: string, updateUserInput: UpdateUserDTO): Promise<User> {
    await this.userRepo.update(id, updateUserInput);
    return this.findOne(id);
  }

  async remove(id: string): Promise<User> {
    const user = await this.findOne(id);
    const deletedUser = { ...user }; // clone to preserve ID
    await this.userRepo.remove(user);
    return deletedUser;
  }
}
