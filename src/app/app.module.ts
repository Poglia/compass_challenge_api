import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./user/user.module";

@Module({
  imports: [
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService ,UserModule],
})
export class AppModule {}
