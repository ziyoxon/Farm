import { Module } from '@nestjs/common';
import { BlockService } from './block.service';
import { BlockController } from './block.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Block } from './entities/block.entity';
import { BlockResolver } from './block.resolver';

@Module({
  imports:[TypeOrmModule.forFeature([Block])],
  controllers: [BlockController],
  providers: [BlockService,BlockResolver],
})
export class BlockModule {}
