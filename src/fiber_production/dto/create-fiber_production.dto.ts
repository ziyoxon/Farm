import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateFiberProductionDto {
    @Field({ nullable: true })
    fiber_yield: string;

    @Field({ nullable: true })
    shearing_schedule: string;

    @Field({ nullable: true })
    fiber_quality: string;

    @Field({ nullable: true })
    animal_id: number;
}
