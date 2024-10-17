import { Field } from '@nestjs/graphql';
import { Column } from 'typeorm';

export class UpdateInfoDto {
  @Field()
  @Column()
  height: string;

  @Field()
  @Column()
  weight: string;

  @Field()
  @Column()
  color: string;

  @Field()
  @Column()
  gender: string;

  @Field()
  @Column()
  breed: string;
}
