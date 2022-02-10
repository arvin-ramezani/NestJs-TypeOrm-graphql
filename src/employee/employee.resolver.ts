import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { createEmployeeDTO } from './dto/create-employee.input';
import { EmployeeService } from './employee.service';
import { Employee } from './entities/employee.entity';

@Resolver(() => Employee)
export class EmployeeResolver {
  constructor(private employeeService: EmployeeService) {}

  @Query(() => [Employee], { name: 'getAllEmployees' })
  getAll() {
    return this.employeeService.getAll();
  }

  @Mutation(() => Employee, { name: 'createEmployee' })
  create(@Args('employeeInput') employee: createEmployeeDTO) {
    return this.employeeService.create(employee);
  }
}
