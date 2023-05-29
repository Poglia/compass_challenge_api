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
import { CreatePostDto } from "../post/dto/create.dto";
import { ParamId } from "src/decorators/param-id.decorator";
import { PostService } from "./post.service";

@Controller("posts")
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  create(@Body() data: CreatePostDto) {
    return this.postService.create(data);
  }

  @Get()
  findAll() {
    return this.postService.findAll();
  }

  @Get(':id')
  async show(@ParamId() id: number) {
    return this.postService.findOne(id);
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
  async delete(@Param() params) {
    return {
      params,
    };
  }
}
