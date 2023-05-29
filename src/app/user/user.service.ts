import {
  BadRequestException,
  Body,
  HttpStatus,
  Injectable,
  NotFoundException,
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

  async findAll() {
    try {
      const data: object = await this.userRepository.find({
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

      if (Array.isArray(data) && data.length === 0)
        throw new NotFoundException("Sem usuarios cadastrados");

      return { status: HttpStatus.OK, users: data };
    } catch (e) {
      return { status: HttpStatus.NOT_FOUND, Message: e.message };
    }
  }

  async findOne(id: number) {
    try {
      const data: object = await this.userRepository.find({
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

      if (data == null)
        throw new NotFoundException("Nenhum usuario encontrado");

      return { status: HttpStatus.OK, users: data };
    } catch (e) {
      const data: object = await {
        status: HttpStatus.NOT_FOUND,
        Message: e.message,
      };
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      const data: object = await this.userRepository.update(id, updateUserDto);
      return { status: HttpStatus.OK, users: data };
    } catch (e) {
      return { status: HttpStatus.NOT_FOUND, Message: e.message };
    }
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
