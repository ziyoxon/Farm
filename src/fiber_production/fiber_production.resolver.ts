import { FiberProductionService } from './fiber_production.service';
import { CreateFiberProductionDto } from './dto/create-fiber_production.dto';
import { UpdateFiberProductionDto } from './dto/update-fiber_production.dto';
import { Args, ID, Mutation, Query, Resolver } from "@nestjs/graphql";
import { FiberProduction } from './entities/fiber_production.entity';

@Resolver("fiber-production")
export class FiberProductionResolver {
  constructor(
    private readonly fiberProductionService: FiberProductionService
  ) {}

  @Mutation(() => FiberProduction)
  async createFiberProduction(
    @Args("createFiberProduction")
    createFiberProductionDto: CreateFiberProductionDto
  ) {
    return this.fiberProductionService.create(createFiberProductionDto);
  }

  @Query(() => [FiberProduction])
  async findAllFiberProductions() {
    return this.fiberProductionService.findAll();
  }

  @Query(() => FiberProduction)
  findOneFiberProduction(@Args("id") id: number) {
    return this.fiberProductionService.findOne(id);
  }

  @Mutation(() => FiberProduction)
  updateFiberProduction(
    @Args("id") id: number,
    @Args("updateFiberProduction")
    updateFiberProductionDto: UpdateFiberProductionDto
  ) {
    return this.fiberProductionService.update(id, updateFiberProductionDto);
  }

  @Mutation(() => ID)
  removeFiberProduction(@Args("id", { type: () => ID }) id: number) {
    return this.fiberProductionService.remove(id);
  }
}
