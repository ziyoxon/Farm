import { Field, InputType } from "@nestjs/graphql";
import { Column } from "typeorm";

@InputType()
export class CreateAnimalDto {
  @Field()
  @Column()
  photo: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  age: number;
}
