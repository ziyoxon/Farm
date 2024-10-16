import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from "@nestjs/common";
import { WorkersService } from "./workers.service";
import { CreateWorkerDto } from "./dto/create-worker.dto";
import { UpdateWorkerDto } from "./dto/update-worker.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Worker } from "./models/worker.model";

@ApiTags("Workers")
@Controller("worker")
export class WorkersController {
  constructor(private readonly workersService: WorkersService) {}

  @Post()
  create(@Body() createWorkerDto: CreateWorkerDto) {
    return this.workersService.create(createWorkerDto);
  }

  @Get()
  findAll() {
    return this.workersService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.workersService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateWorkerDto: UpdateWorkerDto) {
    return this.workersService.update(+id, updateWorkerDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.workersService.remove(+id);
  }
}
