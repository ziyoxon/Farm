import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateSpecialityDto {
  @Field()
  id: number;

  @Field()
  title: string;

  @Field()
  description: string;
}
