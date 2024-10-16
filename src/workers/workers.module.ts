import { Module } from '@nestjs/common';
import { WorkersService } from './workers.service';
import { WorkersController } from './workers.controller';
import { Worker } from './models/worker.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkersResolver } from './workers.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Worker])],
  controllers: [WorkersController],
  providers: [WorkersService,WorkersResolver],
})
export class WorkersModule {}
