import { VaccineService } from './vaccine.service';
import { CreateVaccineDto } from './dto/create-vaccine.dto';
import { UpdateVaccineDto } from './dto/update-vaccine.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Vaccine } from './entities/vaccine.entity';

@Resolver("vaccine")
export class VaccineResolver {
  constructor(private readonly vaccineService: VaccineService) {}

  @Mutation(() => Vaccine)
  createVaccine(@Args("createVaccine") createVaccineDto: CreateVaccineDto) {
    return this.vaccineService.create(createVaccineDto);
  }

  @Query(() => [Vaccine])
  findAllVaccine() {
    return this.vaccineService.findAll();
  }

  @Query(() => Vaccine)
  findOneVaccine(@Args("id") id: number) {
    return this.vaccineService.findOne(+id);
  }

  @Mutation(() => Vaccine)
  updateVaccine(
    @Args("id") id: number,
    @Args("updateVaccine") updateVaccineDto: UpdateVaccineDto
  ) {
    return this.vaccineService.update(+id, updateVaccineDto);
  }

  @Mutation(() => ID)
  removeVaccine(@Args("id", { type: () => ID }) id: number) {
    return this.vaccineService.remove(+id);
  }
}
