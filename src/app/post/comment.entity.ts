import { Entity, ObjectId, ObjectIdColumn, Column } from "typeorm";

export class CommentEntity {
  @Column()
  user_id: number;

  @Column()
  user: string;

  @Column()
  comment: string;

  constructor(user_id: number, user: string, comment: string) {
    this.user_id = user_id;
    this.user = user;
    this.comment = comment;
  }
}
