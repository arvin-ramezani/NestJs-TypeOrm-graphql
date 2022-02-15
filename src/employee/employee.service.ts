import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from 'src/project/entities/project.entity';
import { ProjectService } from 'src/project/project.service';
import { Repository } from 'typeorm';
import { createEmployeeDTO } from './dto/create-employee.input';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
    private projectService: ProjectService,
  ) {}

  findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }

  findOne(id: string): Promise<Employee> {
    return this.employeeRepository.findOne(id);
  }

  create(employee: createEmployeeDTO): Promise<Employee> {
    const newEmp = this.employeeRepository.create(employee);

    return this.employeeRepository.save(newEmp);
  }

  getProject(projectId: string): Promise<Project> {
    return this.projectService.findOne(projectId);
  }
}
