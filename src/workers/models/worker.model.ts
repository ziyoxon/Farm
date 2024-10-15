import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IWorkerCreationAttr {
  name: string;
  age: number;
  expires: number;
  phone: string;
  username: string;
}

@Table({ tableName: "worker" })
export class Worker extends Model<Worker, IWorkerCreationAttr> {
  @ApiProperty({
    example: 1,
    description: "Worker ID",
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "John Doe",
    description: "Worker's name",
  })
  @Column({
    type: DataType.STRING(100),
  })
  name: string;

  @ApiProperty({
    example: 30,
    description: "Worker's age",
  })
  @Column({
    type: DataType.INTEGER,
  })
  age: number;

  @ApiProperty({
    example: 12,
    description: "Worker's contract expiration in months",
  })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  expires: number;
  @Column({
    type: DataType.STRING(15),
    allowNull: false,
  })
  phone: string;
  @Column({
    type: DataType.STRING(100)
  })
  username: string;
}