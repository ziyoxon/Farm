import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateVaccineDto {
  @Field({ nullable: true })
  vaccine_type?: string;

  @Field({ nullable: true })
  vaccine_name?: string;
}
