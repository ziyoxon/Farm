import { Injectable } from '@nestjs/common';
import { CreateVaccineDto } from './dto/create-vaccine.dto';
import { UpdateVaccineDto } from './dto/update-vaccine.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Vaccine } from './entities/vaccine.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VaccineService {
  constructor(
    @InjectRepository(Vaccine) private readonly vaccineRepo: Repository<Vaccine>
  ) {}
  
  create(createVaccineDto: CreateVaccineDto) {
    return this.vaccineRepo.save(createVaccineDto);
  }

  findAll() {
    return this.vaccineRepo.find();
  }

  findOne(id: number) {
    return this.vaccineRepo.findBy({id});
  }

  async update(id: number, updateVaccineDto: UpdateVaccineDto) {
    await this.vaccineRepo.update({ id }, updateVaccineDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.vaccineRepo.delete({ id });
    return id;
  }
}
