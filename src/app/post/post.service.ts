import { Injectable } from "@nestjs/common";
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

  findAll() {
    return this.postRepository.find();
  }

  findOne(id: number) {
    return this.postRepository.findOneBy({ id });
  }

  // update(id: number, updatePostDto: UpdatePostDto) {
  //   return this.postRepository.update(id, UpdatePostDto);
  // }

  remove(id: number) {
    return this.postRepository.delete(id);
  }
}
