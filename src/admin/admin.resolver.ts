import { Resolver, Query, Mutation, Args, ID } from "@nestjs/graphql";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { Admin } from "./models/admin.model";
import { AdminService } from "./admin.service";

@Resolver("admin")
export class AdminsResolver {
  constructor(private readonly adminsService: AdminService) {}

  @Mutation(() => Admin)
  createAdmin(@Args("createAdmin") createAdminDto: CreateAdminDto) {
    return this.adminsService.create(createAdminDto);
  }

  @Query(() => [Admin])
  findAllAdmin() {
    return this.adminsService.findAll();
  }

  @Query(() => Admin)
  findOneAdmin(@Args("id") id: number) {
    return this.adminsService.findOne(+id);
  }

  @Mutation(() => Admin)
  updateAdmin(
    @Args("id") id: number,
    @Args("updateAdmin") updateAdminDto: UpdateAdminDto
  ) {
    return this.adminsService.update(+id, updateAdminDto);
  }

  @Mutation(() => ID)
  removeAdmin(@Args("id", { type: () => ID }) id: number) {
    return this.adminsService.remove(+id);
  }
}
