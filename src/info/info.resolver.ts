import { Resolver, Query, Mutation, Args, ID, Info } from "@nestjs/graphql";
import { CreateInfoDto } from "./dto/create-info.dto";
import { UpdateInfoDto } from "./dto/update-info.dto";
import { InfoService } from "./info.service";

@Resolver(() => Info)
export class InfoResolver {
  constructor(private readonly infoService: InfoService) {}

  @Mutation(() => Info)
  createInfo(@Args('createInfo') createInfoDto: CreateInfoDto) {
    return this.infoService.create(createInfoDto);
  }

  @Query(() => [Info])
  findAllInfos() {
    return this.infoService.findAll();
  }

  @Query(() => Info)
  findOneInfo(@Args("id", { type: () => ID }) id: number) {
    return this.infoService.findOne(id);
  }

  @Mutation(() => Info)
  updateInfo(
    @Args("id", { type: () => ID }) id: number,
    @Args("updateInfo") updateInfoDto: UpdateInfoDto
  ) {
    return this.infoService.update(id, updateInfoDto);
  }

  @Mutation(() => ID)
  removeInfo(@Args("id", { type: () => ID }) id: number) {
    return this.infoService.remove(id);
  }
}
