import { MilkProductionService } from './milk_production.service';
import { CreateMilkProductionDto } from './dto/create-milk_production.dto';
import { UpdateMilkProductionDto } from './dto/update-milk_production.dto';
import { Args, ID, Mutation, Query, Resolver } from "@nestjs/graphql";
import { MilkProduction } from './entities/milk_production.entity';

@Resolver("milk-production")
export class MilkProductionResolver {
  constructor(private readonly milkProductionService: MilkProductionService) {}

  @Mutation(() => MilkProduction)
  async createMilkProduction(
    @Args("createMilkProductionInput")
    createMilkProductionInput: CreateMilkProductionDto
  ) {
    return this.milkProductionService.create(createMilkProductionInput);
  }

  @Query(() => [MilkProduction])
  async findAllMilkProductions() {
    return this.milkProductionService.findAll();
  }

  @Query(() => MilkProduction)
  findOneMilkProduction(@Args("id") id: number) {
    return this.milkProductionService.findOne(+id);
  }

  @Mutation(() => MilkProduction)
  updateMilkProduction(
    @Args("id") id: number,
    @Args("updateMilkProduction")
    updateMilkProductionInput: UpdateMilkProductionDto
  ) {
    return this.milkProductionService.update(+id, updateMilkProductionInput);
  }

  @Mutation(() => ID)
  removeMilkProduction(@Args("id", { type: () => ID }) id: number) {
    return this.milkProductionService.remove(+id);
  }
}
