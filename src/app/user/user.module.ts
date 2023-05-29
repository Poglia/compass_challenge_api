import { Module } from "@nestjs/common";
import { AppService } from "../app.service";
import { UserController } from "./user.controller";


@Module({
  imports: [
  ],
  controllers: [UserController],
  providers: [UserModule],
  exports: [UserModule],
})
export class UserModule {}
