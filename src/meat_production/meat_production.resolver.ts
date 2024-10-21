import { MeatProductionService } from './meat_production.service';
import { CreateMeatProductionDto } from './dto/create-meat_production.dto';
import { UpdateMeatProductionDto } from './dto/update-meat_production.dto';
import { Args, ID, Mutation, Query, Resolver } from "@nestjs/graphql";
import { MeatProduction } from './entities/meat_production.entity';

@Resolver("meat-production")
export class MeatProductionResolver {
  constructor(private readonly meatProductionService: MeatProductionService) {}

  @Mutation(() => MeatProduction)
  createMeatProduction(
    @Args("createMeatProduction")
    createMeatProductionDto: CreateMeatProductionDto
  ) {
    return this.meatProductionService.create(createMeatProductionDto);
  }

  @Query(() => [MeatProduction])
  findAll() {
    return this.meatProductionService.findAll();
  }

  @Query(() => MeatProduction)
  findOne(@Args("id") id: number) {
    return this.meatProductionService.findOne(+id);
  }

  @Mutation(() => MeatProduction)
  updateMeatProduction(
    @Args("id") id: number,
    @Args("updateMeatProduction")
    updateMeatProductionDto: UpdateMeatProductionDto
  ) {
    return this.meatProductionService.update(+id, updateMeatProductionDto);
  }

  @Mutation(() => ID)
  removeMeatProduction(@Args("id", { type: () => ID }) id: number) {
    this.meatProductionService.remove(+id);
    return id;
  }
}
