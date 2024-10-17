import { Injectable } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Animal } from './entities/animal.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AnimalService {
  constructor(
    @InjectRepository(Animal) private readonly animalRepo: Repository<Animal>
  ) {}
  async create(createAnimalDto: CreateAnimalDto) {
    const newAnimal = this.animalRepo.create(createAnimalDto);
    return await this.animalRepo.save(newAnimal);
  }

  findAll() {
    return this.animalRepo.find();
  }

  findOne(id: number) {
    return this.animalRepo.findOne({where: {id}});
  }

  async update(id: number, updateAnimalDto: UpdateAnimalDto) {
    await this.animalRepo.update(id, updateAnimalDto);
    return this.findOne(id)
  }

  async remove(id: number) {
    await  this.animalRepo.delete(id)
    return id;
  }
}
