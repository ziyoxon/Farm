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
  @ApiOperation({ summary: "Create a new worker" })
  @ApiResponse({
    status: 201,
    description: "The new worker has been successfully created",
    type: Worker,
  })
  create(@Body() createWorkerDto: CreateWorkerDto) {
    return this.workersService.create(createWorkerDto);
  }

  @Get()
  @ApiOperation({ summary: "Get list of all workers" })
  @ApiResponse({
    status: 200,
    description: "List of all workers",
    type: [Worker],
  })
  findAll() {
    return this.workersService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Get worker by ID" })
  @ApiResponse({
    status: 200,
    description: "Worker data by ID",
    type: Worker,
  })
  findOne(@Param("id") id: string) {
    return this.workersService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Update worker by ID" })
  @ApiResponse({
    status: 200,
    description: "Worker has been updated",
    type: Worker,
  })
  update(@Param("id") id: string, @Body() updateWorkerDto: UpdateWorkerDto) {
    return this.workersService.update(+id, updateWorkerDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Delete worker by ID" })
  @ApiResponse({
    status: 200,
    description: "Worker has been deleted",
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param("id") id: string) {
    return this.workersService.remove(+id);
  }
}
