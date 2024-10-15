import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  UseGuards,
} from "@nestjs/common";
import { AdminService } from "./admin.service";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Admin } from "./models/admin.model";


@ApiTags("Admin")
@Controller("admin")
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  @ApiOperation({ summary: "Create a new admin" })
  @ApiResponse({
    status: 201,
    description: "The new admin has been successfully created",
    type: Admin,
  })
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }

  @ApiOperation({ summary: "View all admins" })
  @ApiResponse({
    status: 200,
    description: "list of all admins",
    type: [Admin],
  })
  @Get("all")
  findAll() {
    return this.adminService.findAll();
  }

  @ApiOperation({ summary: "View one admin by id" })
  @ApiResponse({
    status: 200,
    description: "view one admin by id",
    type: Admin,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.adminService.findOne(+id);
  }

  @ApiOperation({ summary: "Update the admin by id" })
  @Patch("update/:id")
  update(@Param("id") id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @ApiOperation({ summary: "Delete the admin by id " })
  @Delete("delete/:id")
  remove(@Param("id") id: string) {
    return this.adminService.remove(+id);
  }

 

  
}
