import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateAdminDto {
  @Field()
  name: string;
  @Field()
  login: string;
  @Field()
  telegram_link: string;
  @Field()
  admin_photo: string;
  @Field()
  hashed_password: string;
  @Field()
  hashed_refresh_token: string;
}
