import {
  Controller,
  Get,
  Post,
  Patch,
  Put,
  Delete,
  Body,
  Param,
} from "@nestjs/common";
// import { PostService } from './post.service';

@Controller("api/v1/posts")
export class PostController {
  //   constructor(private readonly postService: PostService) {}

  @Post()
  async create(@Body() body) {
    return { body };
  }

  @Get()
  async list() {
    return { posts: [] };
  }

  @Get(":id")
  async show(@Param() params) {
    return { posts: {}, params };
  }

  @Put(":id")
  async update(@Body() body, @Param() params) {
    return {
      method: "PUT",
      body,
      params,
    };
  }

  @Patch(":id")
  async updatePartial(@Body() body, @Param() params) {
    return {
      method: "PATCH",
      body,
      params,
    };
  }

  @Delete(":id")
  async delete(@Param() params){
    return {
      params
    }
  }
}
