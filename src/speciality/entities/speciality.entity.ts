import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@ObjectType()
@Entity({name: "speciality"})
export class Speciality {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id:number

    @Field()
    @Column()
    title: string;

    @Field()
    @Column()
    description: string;
    
}
