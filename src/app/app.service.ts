import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): string {
    return "Vamos iniciar essa bagaça";
  }
}
