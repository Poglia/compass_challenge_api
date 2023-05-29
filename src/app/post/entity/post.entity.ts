import { Column, ObjectId, Entity, PrimaryColumn } from "typeorm";

@Entity("users")
export class Post {
  @PrimaryColumn()
  id: ObjectId;

  @Column()
  user_id: string;

  @Column()
  user: string;

  @Column()
  post_date: string;

  @Column()
  description: string;

  @Column()
  likes: number;

  @Column()
  url_imagem: string;

  constructor(post?: Partial<Post>) {
    Object.assign(this, post);
  }
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
