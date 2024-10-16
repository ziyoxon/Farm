import { Injectable } from "@nestjs/common";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import * as bcrypt from "bcrypt";
import { Admin } from "./models/admin.model";

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin) private readonly adminRepo: Repository<Admin>
  ) {}

  async create(createAdminDto: CreateAdminDto) {
    const hashedPassword = await bcrypt.hash(createAdminDto.hashed_password, 3);
    const newAdmin = this.adminRepo.create({
      ...createAdminDto,
      hashed_password: hashedPassword,
    });
    return this.adminRepo.save(newAdmin);
  }

  findAll() {
    return this.adminRepo.find();
  }

  findOne(id: number) {
    return this.adminRepo.findOne({ where: { id }});
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    await this.adminRepo.update(id, updateAdminDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.adminRepo.delete(id);
    return id;
  }
}
