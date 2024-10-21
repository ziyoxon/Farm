import { Module } from '@nestjs/common';
import { VaccinationHistoryService } from './vaccination_history.service';
import { VaccinationHistoryController } from './vaccination_history.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VaccinationHistory } from './entities/vaccination_history.entity';
import { VaccinationHistoryResolver } from './vaccination_history.resolver';

@Module({
  imports:[TypeOrmModule.forFeature([VaccinationHistory])],
  controllers: [VaccinationHistoryController],
  providers: [VaccinationHistoryService, VaccinationHistoryResolver],
})
export class VaccinationHistoryModule {}
