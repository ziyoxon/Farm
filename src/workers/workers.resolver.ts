import { Resolver, Query, Mutation, Args, ID } from "@nestjs/graphql";
import { CreateWorkerDto } from "./dto/create-worker.dto";
import { UpdateWorkerDto } from "./dto/update-worker.dto";
import { Worker } from "./models/worker.model";
import { WorkersService } from "./workers.service";

@Resolver(() => Worker)
export class WorkersResolver {
  constructor(private readonly workersService: WorkersService) {}

  @Mutation(() => Worker)
  createWorker(@Args("createWorker") createWorkerDto: CreateWorkerDto) {
    return this.workersService.create(createWorkerDto);
  }

  @Query(() => [Worker])
  findAllWorkers() {
    return this.workersService.findAll();
  }

  @Query(() => Worker)
  findOneWorker(@Args("id", { type: () => ID }) id: number) {
    return this.workersService.findOne(id);
  }

  @Mutation(() => Worker)
  updateWorker(
    @Args("id", { type: () => ID }) id: number,
    @Args("updateWorker") updateWorkerDto: UpdateWorkerDto
  ) {
    return this.workersService.update(id, updateWorkerDto);
  }

  @Mutation(() => ID)
  removeWorker(@Args("id", { type: () => ID }) id: number) {
    return this.workersService.remove(id);
  }
}
