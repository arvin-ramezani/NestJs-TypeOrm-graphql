import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'employee',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    EmployeeModule,
    ProjectModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
