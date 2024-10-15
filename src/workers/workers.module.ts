import { Module } from '@nestjs/common';
import { WorkersService } from './workers.service';
import { WorkersController } from './workers.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Worker } from './models/worker.model';

@Module({
  imports: [SequelizeModule.forFeature([Worker])],
  exports: [WorkersService],
  controllers: [WorkersController],
  providers: [WorkersService],
})
export class WorkersModule {}
