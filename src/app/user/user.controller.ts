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
// import { UserService } from './user.service';

@Controller("api/v1/users")
export class UserController {
  //   constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() body) {
    return { body };
  }

  @Get()
  async list() {
    return { users: [] };
  }

  @Get(":id")
  async show(@Param() params) {
    return { user: {}, params };
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
