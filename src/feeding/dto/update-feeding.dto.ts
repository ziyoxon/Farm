import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateFeedingDto {
  @Field({ nullable: true })
  animal_id?: number;

  @Field({ nullable: true })
  feeding_schedules?: string;

  @Field({ nullable: true })
  types_of_feed?: string;

  @Field({ nullable: true })
  dietary?: string;

  @Field({ nullable: true })
  worker_id?: number;
}
