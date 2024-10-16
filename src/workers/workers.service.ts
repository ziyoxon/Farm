import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateWorkerDto } from "./dto/create-worker.dto";
import { UpdateWorkerDto } from "./dto/update-worker.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Worker } from "./models/worker.model";
import { Repository } from "typeorm";

@Injectable()
export class WorkersService {
  constructor(
    @InjectRepository(Worker) private readonly workerRepo: Repository<Worker>
  ) {}

  async create(createWorkerDto: CreateWorkerDto) {
    const newWorker = this.workerRepo.create(createWorkerDto);
    return await this.workerRepo.save(newWorker);
  }

  findAll() {
    return this.workerRepo.find();
  }

  findOne(id: number) {
    return this.workerRepo.findOne({ where: { id } });
  }

  async update(id: number, updateWorkerDto: UpdateWorkerDto) {
    await this.workerRepo.update(id, updateWorkerDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.workerRepo.delete(id);
    return id;
  }
}
