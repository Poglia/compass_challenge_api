import { User } from "../entity/user.entity";
import {
  IsString,
  IsEmail,
  MinLength,
  IsOptional,
} from 'class-validator';

export class CreateUserDto {

  @IsString()
  name: string;

  @IsString()
  user: string;

  @IsString()
  birthdate: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsOptional()
  profile_photo: string;
}
