import { HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UpdatePostDto } from "./dto/update.dto";
import { Post as PostEntity } from "./entity/post.entity";
import { CreatePostDto } from "./dto/create.dto";

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>,
  ) {}

  create(createPostDto: CreatePostDto) {
    return this.postRepository.save(createPostDto);
  }

  async findAll() {
    try {
      const data: object = await this.postRepository.find();
      if (Array.isArray(data) && data.length === 0)
        throw new NotFoundException("Sem posts cadastrados");

      return { status: HttpStatus.OK, users: data };
    } catch (e) {
      return { status: HttpStatus.NOT_FOUND, Message: e.message };
    }
  }

  async findOne(id: number) {
    try {
      const data: object = await this.postRepository.findOneBy({ id });
      if (data == null)
        throw new NotFoundException("Nenhum post encontrado");

      return { status: HttpStatus.OK, users: data };
    } catch (e) {
      return { status: HttpStatus.NOT_FOUND, Message: e.message };
    }
  }

  // update(id: number, updatePostDto: UpdatePostDto) {
  //   return this.postRepository.update(id, UpdatePostDto);
  // }

  remove(id: number) {
    return this.postRepository.delete(id);
  }
}
