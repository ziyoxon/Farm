import { Injectable } from '@nestjs/common';
import { CreateVaccinationHistoryDto } from './dto/create-vaccination_history.dto';
import { UpdateVaccinationHistoryDto } from './dto/update-vaccination_history.dto';
import { VaccinationHistory } from './entities/vaccination_history.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class VaccinationHistoryService {
  constructor(
    @InjectRepository(VaccinationHistory) private readonly vaccinationHistoryRepo: Repository<VaccinationHistory>
  ) {}

  create(createVaccinationHistoryDto: CreateVaccinationHistoryDto) {
    return this.vaccinationHistoryRepo.save(createVaccinationHistoryDto);
  }

  findAll() {
    return this.vaccinationHistoryRepo.find();
  }

  findOne(id: number) {
    return this.vaccinationHistoryRepo.findBy({id});
  }

  async update(id: number, updateVaccinationHistoryDto: UpdateVaccinationHistoryDto) {
    await this.vaccinationHistoryRepo.update({ id }, updateVaccinationHistoryDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.vaccinationHistoryRepo.delete({ id });
    return id;
  }
}
