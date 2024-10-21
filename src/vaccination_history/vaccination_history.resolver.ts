import { VaccinationHistoryService } from "./vaccination_history.service";
import { CreateVaccinationHistoryDto } from "./dto/create-vaccination_history.dto";
import { UpdateVaccinationHistoryDto } from "./dto/update-vaccination_history.dto";
import { Args, ID, Mutation, Query, Resolver } from "@nestjs/graphql";
import { VaccinationHistory } from "./entities/vaccination_history.entity";

@Resolver("vaccination-history")
export class VaccinationHistoryResolver {
  constructor(
    private readonly vaccinationHistoryService: VaccinationHistoryService
  ) {}

  @Mutation(() => VaccinationHistory)
  createVaccinationHistory(
    @Args("createVaccinationHistory")
    createVaccinationHistoryDto: CreateVaccinationHistoryDto
  ) {
    return this.vaccinationHistoryService.create(createVaccinationHistoryDto);
  }

  @Query(() => [VaccinationHistory])
  findAllVaccinationHistory() {
    return this.vaccinationHistoryService.findAll();
  }

  @Query(() => VaccinationHistory)
  findOneVaccinationHistory(@Args("id") id: number) {
    return this.vaccinationHistoryService.findOne(+id);
  }

  @Mutation(() => VaccinationHistory)
  updateVaccinationHistory(
    @Args("id") id: number,
    @Args("updateVaccinationHistory")
    updateVaccinationHistoryDto: UpdateVaccinationHistoryDto
  ) {
    return this.vaccinationHistoryService.update(
      +id,
      updateVaccinationHistoryDto
    );
  }

  @Mutation(() => ID)
  removeVaccinationHistory(@Args("id", { type: () => ID }) id: number) {
    return this.vaccinationHistoryService.remove(+id);
  }
}
