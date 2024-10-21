import { Module } from '@nestjs/common';
import { FeedingService } from './feeding.service';
import { FeedingController } from './feeding.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feeding } from './entities/feeding.entity';
import { FeedingResolver } from './feeding.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Feeding])],
  controllers: [FeedingController],
  providers: [FeedingService, FeedingResolver],
})
export class FeedingModule {}
