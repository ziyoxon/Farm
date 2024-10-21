import { Module } from '@nestjs/common';
import { FiberProductionService } from './fiber_production.service';
import { FiberProductionController } from './fiber_production.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FiberProduction } from './entities/fiber_production.entity';
import { FiberProductionResolver } from './fiber_production.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([FiberProduction])],
  controllers: [FiberProductionController],
  providers: [FiberProductionService, FiberProductionResolver],
})
export class FiberProductionModule {}
