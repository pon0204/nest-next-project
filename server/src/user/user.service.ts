import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entites/user.entity';

@Injectable()
export class UserService {
  @InjectRepository(User) private userRepository: Repository<User>;
  findAll() {
    return this.userRepository.find();
  }

  create(user: CreateUserDto) {
    this.userRepository.save(user);
  }
}
