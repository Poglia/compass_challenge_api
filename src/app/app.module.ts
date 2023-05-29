import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./user/user.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { config } from '../../orm.config';
import { PostModule } from "./post/post.module";


@Module({
  imports: [
    UserModule,
    PostModule,
    TypeOrmModule.forRoot(config)
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService],
})
export class AppModule {}
