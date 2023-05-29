import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PostEntity } from "./post/post.entity";
import { UserEntity } from "./user/user.entity";
import { UserController } from "./user/user.controller";
// import { PostController } from "./post/post.controller";

@Module({
  imports: [
  ],
  controllers: [AppController, UserController],
  providers: [AppService],
  exports: [AppService],
})
export class AppModule {}
