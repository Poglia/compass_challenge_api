import { Post } from "src/app/post/entity/post.entity";
import { User } from "src/app/user/entity/user.entity";
import { Column, ObjectId, Entity, PrimaryColumn, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

@Entity()
export class Comment {
  @PrimaryGeneratedColumn("increment")
   id: number;

   @ManyToOne(() => User, (user) => user.comments)
   user_id: User;

   @ManyToOne(() => Post, (post) => post.comments)
   post_id: Post;

  @Column()
  umsername: string;

  @Column()
  comment: string;

  constructor(post?: Partial<Comment>) {
    Object.assign(this, this.comment);
  }
}

/**
 *  "comments": [
        {
          "user_id": 4,
          "user": "diegosuarez",
          "comment": "Linda foto Ana!  🌸"
        },
        {
          "user_id": 13,
          "user": "luizbrugnera",
          "comment": "Que flores maravilhosas!  🌷"
        }
      ],
 * 
 */
