import { Comment } from "src/app/comment/entity/comment.entity";
import { Post } from "src/app/post/entity/post.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  // nao apararece
  @OneToMany(() => Post, (post) => post.user_id)
  posts: Post[]
  
  // nao apararece
  @OneToMany(() => Comment, (comment) => comment.user_id)
  comments: Comment[]

  @Column()
  name: string;

  @Column()
  user: string;

  @Column()
  birthdate: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  profile_photo: string;
}

/*

 "user_id": 1,
      "name": "Ana Luiza Landim Irschlinger",
      "user": "analuizalandimirschlinger",
      "birthdate": "1992-08-05",
      "email": "ana.irschlinger.pb@compasso.com.br",
      "password": "BolsistasUOL",
      "profile_photo": "https://img.freepik.com/fotos-gratis/renderizacao-3d-do-avatar-de-chamada-de-zoom_23-2149556787.jpg?w=996&t=st=1683037038~exp=1683037638~hmac=fa22db8dd3b110700682c8df309620ee1fd11c8287e0641d8587e960a8ceb3ec"
    },
*/
