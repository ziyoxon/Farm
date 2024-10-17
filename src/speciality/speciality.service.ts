import { Injectable } from '@nestjs/common';
import { CreateSpecialityDto } from './dto/create-speciality.dto';
import { UpdateSpecialityDto } from './dto/update-speciality.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Speciality } from './entities/speciality.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SpecialityService {
  constructor(
    @InjectRepository(Speciality) private readonly speRepo : Repository <Speciality>
  ) {}
   async create(createSpecialityDto: CreateSpecialityDto) {
    const newSpe = await this.speRepo.create(createSpecialityDto);
    return await this.speRepo.save(newSpe);
  }

  findAll() {
    return this.speRepo.find()
  }

  findOne(id: number) {
    return this.speRepo.findOne({where:{id}});
  }

  async update(id: number, updateSpecialityDto: UpdateSpecialityDto) {
    await this.speRepo.update(id, updateSpecialityDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.speRepo.delete(id);
    return id
  }
}
