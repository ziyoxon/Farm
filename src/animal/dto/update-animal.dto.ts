import { PartialType } from '@nestjs/swagger';
import { CreateAnimalDto } from './create-animal.dto';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateAnimalDto {
    @Field()
    photo: string;

    @Field()
    name: string;

    @Field()
    age: number;
}
