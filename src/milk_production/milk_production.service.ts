import { Injectable } from '@nestjs/common';
import { CreateMilkProductionDto } from './dto/create-milk_production.dto';
import { UpdateMilkProductionDto } from './dto/update-milk_production.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MilkProduction } from './entities/milk_production.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MilkProductionService {
  constructor(
    @InjectRepository(MilkProduction) private readonly milkProductionRepo: Repository<MilkProduction>
  ) {}
  
  create(createMilkProductionDto: CreateMilkProductionDto) {
    return this.milkProductionRepo.save(createMilkProductionDto);
  }

  findAll() {
    return this.milkProductionRepo.find();
  }

  findOne(id: number) {
    return this.milkProductionRepo.findBy({ id });
  }

  async update(id: number, updateMilkProductionDto: UpdateMilkProductionDto) {
    await this.milkProductionRepo.update({ id }, updateMilkProductionDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.milkProductionRepo.delete({ id });
    return id;
  }
}
