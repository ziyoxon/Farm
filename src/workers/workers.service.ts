import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateWorkerDto } from "./dto/create-worker.dto";
import { UpdateWorkerDto } from "./dto/update-worker.dto";
import { Worker } from "./models/worker.model";

@Injectable()
export class WorkersService {
  constructor(@InjectModel(Worker) private workerModel: typeof Worker) {}

  async create(createWorkerDto: CreateWorkerDto) {
    const newWorker = await this.workerModel.create({
      ...createWorkerDto,
    });
    return newWorker;
  }

  async findAll() {
    return this.workerModel.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const worker = await this.workerModel.findOne({
      where: { id },
      include: { all: true },
    });
    if (!worker) {
      throw new NotFoundException(`Worker with ID ${id} not found`);
    }
    return worker;
  }

  async update(id: number, updateWorkerDto: UpdateWorkerDto) {
    const [numberOfAffectedRows, [updatedWorker]] =
      await this.workerModel.update(updateWorkerDto, {
        where: { id },
        returning: true,
      });
    if (numberOfAffectedRows === 0) {
      throw new NotFoundException(`Worker with ID ${id} not found`);
    }
    return updatedWorker;
  }

  async remove(id: number) {
    const deleted = await this.workerModel.destroy({
      where: { id },
    });
    if (deleted === 0) {
      throw new NotFoundException(`Worker with ID ${id} not found`);
    }
    return deleted;
  }
}
