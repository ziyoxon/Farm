import { Module } from '@nestjs/common';
import { MeatProductionService } from './meat_production.service';
import { MeatProductionController } from './meat_production.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MeatProduction } from './entities/meat_production.entity';
import { MeatProductionResolver } from './meat_production.resolver';

@Module({
  imports:[TypeOrmModule.forFeature([MeatProduction])],
  controllers: [MeatProductionController],
  providers: [MeatProductionService, MeatProductionResolver],
})
export class MeatProductionModule {}
