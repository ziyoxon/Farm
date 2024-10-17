import { Field, InputType } from "@nestjs/graphql";
import { Column } from "typeorm";

@InputType()
export class CreateBlockDto {
  @Field()
  @Column()
  number: number;

  @Field()
  @Column()
  description: string;
}
