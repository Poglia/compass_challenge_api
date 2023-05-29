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
import { User as UserEntity } from "./entity/user.entity";

@Controller("users")
export class UserController {

  // @Get()
  // public async getUsers(): Promise<UserEntity[]> {
  //   return await this.usersRepository.find();
  // }

  // @Get(":user_id")
  // public async getUser(@Param() params): Promise<UserEntity[]> {
  //   return await this.usersRepository.find({ user_id: Number(params.user_id) });
  // }

  // @Post()
  // public async createUser(
  //   @Body() user: Partial<UserEntity>,
  // ): Promise<UserEntity> {
  //   return await this.usersRepository.save(new UserEntity(user));
  //   // return new UserEntity(user)
  // }

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
