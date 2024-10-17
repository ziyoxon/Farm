import { Field,  InputType,  ObjectType } from "@nestjs/graphql";
import { Column } from "typeorm";

@InputType()
export class CreateInfoDto {
  @Field()
  @Column()
  height: string;

  @Field()
  @Column()
  weight: string;

  @Field()
  @Column()
  color: string;

  @Field()
  @Column()
  gender: string;

  @Field()
  @Column()
  breed: string;
}
