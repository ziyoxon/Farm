import { Injectable } from '@nestjs/common';
import { CreateMeatProductionDto } from './dto/create-meat_production.dto';
import { UpdateMeatProductionDto } from './dto/update-meat_production.dto';
import { MeatProduction } from './entities/meat_production.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MeatProductionService {
  constructor(
    @InjectRepository(MeatProduction) private readonly meatProductionRepo: Repository<MeatProduction>
  ) {}

  create(createMeatProductionDto: CreateMeatProductionDto) {
    return this.meatProductionRepo.save(createMeatProductionDto);
  }

  findAll() {
    return this.meatProductionRepo.find();
  }

  findOne(id: number) {
    return this.meatProductionRepo.findOneBy({ id });
  }

  async update(id: number, updateMeatProductionDto: UpdateMeatProductionDto) {
    await this.meatProductionRepo.update({ id }, updateMeatProductionDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.meatProductionRepo.delete({ id });
    return id;
  }
}
