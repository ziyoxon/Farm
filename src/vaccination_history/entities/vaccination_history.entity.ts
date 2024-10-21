import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class VaccinationHistory {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  animal_id: number;

  @Field()
  @Column()
  vaccine_type_id: number;

  @Field()
  @Column()
  vaccinated_date: Date;

  @Field()
  @Column()
  next_vaccination_date: Date;

  @Field()
  @Column()
  vaccination_photo: string;

  @Field()
  @Column()
  worker_id: number;
}
