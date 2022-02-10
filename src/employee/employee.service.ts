import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createEmployeeDTO } from './dto/create-employee.input';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  getAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }

  create(employee: createEmployeeDTO): Promise<Employee> {
    const newEmp = this.employeeRepository.create(employee);

    return this.employeeRepository.save(newEmp);
  }
}
