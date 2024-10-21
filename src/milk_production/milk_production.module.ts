import { Module } from '@nestjs/common';
import { MilkProductionService } from './milk_production.service';
import { MilkProductionController } from './milk_production.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MilkProduction } from './entities/milk_production.entity';
import { MilkProductionResolver } from './milk_production.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([MilkProduction])],
  controllers: [MilkProductionController],
  providers: [MilkProductionService, MilkProductionResolver],
})
export class MilkProductionModule {}
