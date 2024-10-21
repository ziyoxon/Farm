import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateVaccinationHistoryDto {
  @Field({ nullable: true })
  animal_id: number;

  @Field({ nullable: true })
  vaccine_type_id: number;

  @Field({ nullable: true })
  vaccinated_date: Date;

  @Field({ nullable: true })
  next_vaccination_date: Date;

  @Field({ nullable: true })
  vaccination_photo: string;

  @Field({ nullable: true })
  worker_id: number;
}
