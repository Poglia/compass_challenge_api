import {
  IsString,
  IsOptional,
  IsNumber,
} from 'class-validator';
import { User } from 'src/app/user/entity/user.entity';

export class CreatePostDto {

  @IsNumber()
  user_id: User;

  @IsString()
  post_date: string;

  @IsString()
  description: string;
  
  @IsNumber()
  likes: number;
  
  @IsOptional()
  url_image: string;
}
