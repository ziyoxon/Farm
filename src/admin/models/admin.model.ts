import { Field, ID, ObjectType } from "@nestjs/graphql";
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@ObjectType()
@Entity({ name: "admin" })
export class Admin {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  login: string;

  @Field()
  @Column()
  telegram_link: string;

  @Field()
  @Column()
  admin_photo: string;

  @Field()
  @Column()
  hashed_password: string;


  @Field()
  @Column()
  hashed_refresh_token: string;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}
