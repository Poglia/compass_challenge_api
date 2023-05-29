import { Column, ObjectId, Entity, ObjectIdColumn } from "typeorm";

@Entity("users")
export class UserEntity {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  user_id: number;

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

  constructor(user?: Partial<UserEntity>) {
    Object.assign(this, user);
  }
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
