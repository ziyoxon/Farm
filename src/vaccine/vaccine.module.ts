import { Module } from '@nestjs/common';
import { VaccineService } from './vaccine.service';
import { VaccineController } from './vaccine.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vaccine } from './entities/vaccine.entity';
import { VaccineResolver } from './vaccine.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Vaccine])],
  controllers: [VaccineController],
  providers: [VaccineService, VaccineResolver],
})
export class VaccineModule {}
