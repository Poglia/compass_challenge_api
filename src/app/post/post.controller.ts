import {
  Controller,
  Get,
  Post,
  Patch,
  Put,
  Delete,
  Body,
} from "@nestjs/common";
// import { PostService } from './post.service';

@Controller("api/v1/posts")
export class PostController {
  //   constructor(private readonly postService: PostService) {}

  @Post()
  async createPost(@Body() body) {
    return { body };
  }
}
