import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { User } from "src/app/user/entity/user.entity";
import { Comment } from "src/app/comment/entity/comment.entity";
import { isNumber } from "class-validator";

@Entity()
export class Post {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @ManyToOne(() => User, (user) => user.comments)
  user_id: User;

  // nao apararece
  @OneToMany(() => Comment, (comment) => comment.post_id)
  comments: Comment[];

  @Column()
  post_date: string;

  @Column()
  description: string;

  @Column()
  likes: number;

  @Column({ nullable: true})
  url_image: string;

}

/*
 "posts": [
    {
      "user_id": 1,
      "user": "anairschlinger",
      "post_date": "2023-04-22T10:15:00",
      "description": "A primavera chegou!  🌺",
      "likes": 8,
      "ulr_image": "https://img.freepik.com/fotos-gratis/foto-de-grande-angular-de-uma-unica-arvore-crescendo-sob-um-ceu-nublado-durante-um-por-do-sol-cercado-por-grama_181624-22807.jpg?w=1060&t=st=1683036673~exp=1683037273~hmac=ce830776bffa6b8d6cc0571909964f8bd52480f6a7e1da4f84833680e73defd4"
    },
*/
