import {
  Controller,
  Get,
  Post,
  Patch,
  Put,
  Delete,
  Body,
} from "@nestjs/common";
// import { UserService } from './user.service';

@Controller("api/v1/users")
export class UserController {
  //   constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() body) {
    return { body };
  }
}
