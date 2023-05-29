import { Column, ObjectId, Entity, PrimaryColumn } from "typeorm";

@Entity("comments")
export class Comments {
  @PrimaryColumn()
  id: ObjectId;

  @Column()
  user_id: number;

  @Column()
  umsername: string;

  @Column()
  comment: string;

  constructor(post?: Partial<Comment>) {
    Object.assign(this, post);
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
