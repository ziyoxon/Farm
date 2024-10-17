import { Resolver, Query, Mutation, Args, ID } from "@nestjs/graphql";
import { SpecialityService } from "./speciality.service";
import { CreateSpecialityDto } from "./dto/create-speciality.dto";
import { UpdateSpecialityDto } from "./dto/update-speciality.dto";
import { Speciality } from "./entities/speciality.entity";

@Resolver(() => Speciality)
export class SpecialityResolver {
  constructor(private readonly specialityService: SpecialityService) {}

  @Mutation(() => Speciality)
  createSpeciality(
    @Args("createSpeciality") createSpecialityDto: CreateSpecialityDto
  ) {
    return this.specialityService.create(createSpecialityDto);
  }

  @Query(() => [Speciality])
  findAllSpecialities() {
    return this.specialityService.findAll();
  }

  @Query(() => Speciality)
  findOneSpeciality(@Args("id", { type: () => ID }) id: number) {
    return this.specialityService.findOne(id);
  }

  @Mutation(() => Speciality)
  updateSpeciality(
    @Args("id", { type: () => ID }) id: number,
    @Args("updateSpeciality") updateSpecialityDto: UpdateSpecialityDto
  ) {
    return this.specialityService.update(id, updateSpecialityDto);
  }

  @Mutation(() => ID)
  removeSpeciality(@Args("id", { type: () => ID }) id: number) {
    return this.specialityService.remove(id);
  }
}
