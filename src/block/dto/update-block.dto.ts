import { Field, InputType } from "@nestjs/graphql";
import { Column } from "typeorm";


@InputType()
export class UpdateBlockDto {
  @Field()
  @Column()
  number: number;

  @Field()
  @Column()
  description: string;
}
