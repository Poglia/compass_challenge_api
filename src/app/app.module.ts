import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './post/post.entity';
import { UserEntity } from './user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://0.0.0.0:27017',
      database: 'compass',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      ssl: false,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }),
    TypeOrmModule.forFeature([PostEntity, UserEntity]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
