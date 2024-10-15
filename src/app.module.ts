import { ConfigModule } from "@nestjs/config";
import { join } from "node:path";
import { SequelizeModule } from "@nestjs/sequelize";
import { Module } from "@nestjs/common";
import { ServeStaticModule } from "@nestjs/serve-static";
import { AdminModule } from "./admin/admin.module";
import { Admin } from "./admin/models/admin.model";
import { WorkersModule } from './workers/workers.module';
import { Worker } from "./workers/models/worker.model";
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "static"),
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [
        Admin,
        Worker
      ],
      autoLoadModels: true,
      sync: { alter: true },
      logging: false,
    }),
    AdminModule,
    WorkersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
