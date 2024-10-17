import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateSpecialityDto {
    
    @Field()
    title: string;

    @Field()
    description: string;
}
