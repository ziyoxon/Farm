import { Injectable } from '@nestjs/common';
import { CreateFiberProductionDto } from './dto/create-fiber_production.dto';
import { UpdateFiberProductionDto } from './dto/update-fiber_production.dto';
import { FiberProduction } from './entities/fiber_production.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FiberProductionService {
  constructor(
    @InjectRepository(FiberProduction) private readonly fiberProductionRepo: Repository<FiberProduction>
  ) {}

  create(createFiberProductionDto: CreateFiberProductionDto) {
    return this.fiberProductionRepo.save(createFiberProductionDto);
  }

  findAll() {
    return this.fiberProductionRepo.find();
  }

  findOne(id: number) {
    return this.fiberProductionRepo.findBy({id});
  }

  async update(id: number, updateFiberProductionDto: UpdateFiberProductionDto) {
    await this.fiberProductionRepo.update({ id }, updateFiberProductionDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.fiberProductionRepo.delete({ id });
    return id;
  }
}
