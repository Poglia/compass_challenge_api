import {
  IsString,
  IsOptional,
  IsNumber,
} from 'class-validator';

export class CreatePostDto {

  @IsString()
  name: string;

  @IsString()
  user_id: number;

  @IsString()
  post_date: string;

  @IsString()
  description: string;

  @IsNumber()
  likes: number;

  @IsOptional()
  url_imagem: string;
}
