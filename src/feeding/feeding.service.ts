import { Injectable } from '@nestjs/common';
import { CreateFeedingDto } from './dto/create-feeding.dto';
import { UpdateFeedingDto } from './dto/update-feeding.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Feeding } from './entities/feeding.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FeedingService {
  constructor(
    @InjectRepository(Feeding) private readonly feedingRepo: Repository<Feeding>
  ) {}

  create(createFeedingDto: CreateFeedingDto) {
    return this.feedingRepo.save(createFeedingDto);
  }

  findAll() {
    return this.feedingRepo.find();
  }

  findOne(id: number) {
    return this.feedingRepo.findOneBy({ id });
  }

  async update(id: number, updateFeedingDto: UpdateFeedingDto) {
    await this.feedingRepo.update({ id }, updateFeedingDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.feedingRepo.delete({ id });
    return id;
  }
}
