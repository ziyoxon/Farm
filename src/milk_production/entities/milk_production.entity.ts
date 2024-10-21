import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class MilkProduction {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    meat_yield: string;

    @Field()
    @Column()
    milk_schedule: string;

    @Field()
    @Column()
    milk_quality: string;

    @Field()
    @Column()
    animal_id: number;
}
