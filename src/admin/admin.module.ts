import { forwardRef, Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { Admin } from './models/admin.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminsResolver } from './admin.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Admin])],
  controllers: [AdminController],
  providers: [AdminService,AdminsResolver],
})
export class AdminModule {}
