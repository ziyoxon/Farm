import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateMilkProductionDto {
  @Field({ nullable: true })
  meat_yield: string;

  @Field({ nullable: true })
  milk_schedule: string;

  @Field({ nullable: true })
  milk_quality: string;

  @Field({ nullable: true })
  animal_id: number;
}
