import { Resolver, Query, Mutation, Args, ID } from "@nestjs/graphql";
import { CreateBlockDto } from "./dto/create-block.dto";
import { UpdateBlockDto } from "./dto/update-block.dto";
import { BlockService } from "./block.service";
import { Block } from "./entities/block.entity";

@Resolver(() => Block)
export class BlockResolver {
  constructor(private readonly blockService: BlockService) {}

  @Mutation(() => Block)
  createBlock(@Args("createBlock") createBlockDto: CreateBlockDto) {
    return this.blockService.create(createBlockDto);
  }

  @Query(() => [Block])
  findAllBlocks() {
    return this.blockService.findAll();
  }

  @Query(() => Block)
  findOneBlock(@Args("id", { type: () => ID }) id: number) {
    return this.blockService.findOne(id);
  }

  @Mutation(() => Block)
  updateBlock(
    @Args("id", { type: () => ID }) id: number,
    @Args("updateBlock") updateBlockDto: UpdateBlockDto
  ) {
    return this.blockService.update(id, updateBlockDto);
  }

  @Mutation(() => ID)
  removeBlock(@Args("id", { type: () => ID }) id: number) {
    return this.blockService.remove(id);
  }
}
