import {
  BadRequestException,
  Body,
  HttpStatus,
  Injectable,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create.dto";
import { UpdateUserDto } from "./dto/update.dto";
import { User as UserEntity } from "./entity/user.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  findAll() {
    return this.userRepository
      .find({
        select: {
          id: true,
          name: true,
          user: true,
          birthdate: true,
          email: true,
          password: false,
          profile_photo: true,
        },
      })
      .finally(() => {
        console.log("Status: " + HttpStatus.OK);
      });
  }

  findOne(id: number) {
    return this.userRepository.find({
      where: { id },
      select: {
        id: true,
        name: true,
        user: true,
        birthdate: true,
        email: true,
        password: false,
        profile_photo: true,
      },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
