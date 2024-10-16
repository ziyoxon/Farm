import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateWorkerDto {
  @Field()
  name: string;

  @Field()
  age: number;

  @Field()
  expires: number;

  @Field()
  phone: string;

  @Field()
  username: string;
}
