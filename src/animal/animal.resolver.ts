import { Resolver, Query, Mutation, Args, ID } from "@nestjs/graphql";
import { CreateAnimalDto } from "./dto/create-animal.dto";
import { UpdateAnimalDto } from "./dto/update-animal.dto";
import { AnimalService } from "./animal.service";
import { Animal } from "./entities/animal.entity";

@Resolver(() => Animal)
export class AnimalResolver {
  constructor(private readonly animalService: AnimalService) {}

  @Mutation(() => Animal)
  createAnimal(@Args("createAnimal") createAnimalDto: CreateAnimalDto) {
    return this.animalService.create(createAnimalDto);
  }

  @Query(() => [Animal])
  findAllAnimals() {
    return this.animalService.findAll();
  }

  @Query(() => Animal)
  findOneAnimal(@Args("id", { type: () => ID }) id: number) {
    return this.animalService.findOne(id);
  }

  @Mutation(() => Animal)
  updateAnimal(
    @Args("id", { type: () => ID }) id: number,
    @Args("updateAnimal") updateAnimalDto: UpdateAnimalDto
  ) {
    return this.animalService.update(id, updateAnimalDto);
  }

  @Mutation(() => ID)
  removeAnimal(@Args("id", { type: () => ID }) id: number) {
    return this.animalService.remove(id);
  }
}
