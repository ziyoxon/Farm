import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { GraphQLModule } from "@nestjs/graphql";
import { AdminModule } from "./admin/admin.module";
import { WorkersModule } from "./workers/workers.module";

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: "schema.gql",
      sortSchema: true,
      playground: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        type: config.get<"postgres">("PG_CONNECTION"),
        host: config.get<string>("PG_HOST"),
        username: config.get<string>("PG_USERNAME"),
        password: config.get<string>("PG_PASSWORD"),
        port: config.get<number>("PG_PORT"),
        database: config.get<string>("PG_DATABASE"),
        entities: [__dirname + "dist/**/*.entity{.ts,.js}"],
        synchronize: true,
        autoLoadEntities: true,
        logging: true,
      }),
    }),
    AdminModule,
    WorkersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
