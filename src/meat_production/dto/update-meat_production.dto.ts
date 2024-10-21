import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateMeatProductionDto {
  @Field({ nullable: true })
  meat_yield?: string;

  @Field({ nullable: true })
  slaughter_date?: Date;

  @Field({ nullable: true })
  sharing_schedule?: string;

  @Field({ nullable: true })
  animal_id?: number;
}
