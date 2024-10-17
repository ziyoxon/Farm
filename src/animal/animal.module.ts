import { Module } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { AnimalController } from './animal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Animal } from './entities/animal.entity';
import { AnimalResolver } from './animal.resolver';

@Module({
  imports :[TypeOrmModule.forFeature([Animal])],
  controllers: [AnimalController],
  providers: [AnimalService,AnimalResolver],
})
export class AnimalModule {}
