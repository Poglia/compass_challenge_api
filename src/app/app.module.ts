import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostEntity } from "./post/post.entity";
import { UserEntity } from "./user/user.entity";
import { UserController } from "./user/user.controller";
// import { PostController } from "./post/post.controller";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mongodb",
      url: "mongodb://0.0.0.0:27017",
      database: "compass",
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      ssl: false,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }),
    TypeOrmModule.forFeature([UserEntity]),
  ],
  controllers: [AppController, UserController],
  providers: [AppService],
  exports: [AppService],
})
export class AppModule {}
