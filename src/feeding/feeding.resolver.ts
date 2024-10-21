import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FeedingService } from './feeding.service';
import { CreateFeedingDto } from './dto/create-feeding.dto';
import { UpdateFeedingDto } from './dto/update-feeding.dto';
import { Args, ID, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Feeding } from './entities/feeding.entity';

@Resolver("feeding")
export class FeedingResolver {
  constructor(private readonly feedingService: FeedingService) {}

  @Mutation(() => Feeding)
  createFeeding(@Args("createFeeding") createFeedingDto: CreateFeedingDto) {
    return this.feedingService.create(createFeedingDto);
  }

  @Query(() => [Feeding])
  findAllFeeding() {
    return this.feedingService.findAll();
  }

  @Query(() => Feeding)
  findOneFeeding(@Args("id") id: number) {
    return this.feedingService.findOne(+id);
  }

  @Mutation(() => Feeding)
  updateFeeding(
    @Args("id") id: number,
    @Args("updateFeeding") updateFeedingDto: UpdateFeedingDto
  ) {
    return this.feedingService.update(+id, updateFeedingDto);
  }

  @Mutation(() => ID)
  removeFeeding(@Args("id", { type: () => ID }) id: number) {
    return this.feedingService.remove(+id);
  }
}
