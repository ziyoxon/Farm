import { Injectable } from '@nestjs/common';
import { CreateInfoDto } from './dto/create-info.dto';
import { UpdateInfoDto } from './dto/update-info.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Info } from './entities/info.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InfoService {
  constructor(
    @InjectRepository(Info) private readonly infoRepo: Repository<Info>
  ) {}
  async create(createInfoDto: CreateInfoDto) {
    const newInfo = this.infoRepo.create(createInfoDto);
    return await this.infoRepo.save(newInfo);
  }

  findAll() {
    return this.infoRepo.find();
  }

  findOne(id: number) {
    return this.infoRepo.findOne({where: {id}})
  }

  update(id: number, updateInfoDto: UpdateInfoDto) {
     this.infoRepo.update(id,updateInfoDto)
    return this.findOne(id)
  }

  async remove(id: number) {
    await this.infoRepo.delete(id)
    return id
  }
}
