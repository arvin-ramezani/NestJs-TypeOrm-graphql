import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProjectInput } from './dto/create-project.input';
import { Project } from './entities/project.entity';
import { UpdateProjectInput } from './dto/update-project.input';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project) private projectRepository: Repository<Project>,
  ) {}

  create(project: CreateProjectInput): Promise<Project> {
    const newProject = this.projectRepository.create(project);
    return this.projectRepository.save(newProject);
  }

  findAll(): Promise<Project[]> {
    return this.projectRepository.find({
      relations: ['employees'],
    });
  }

  findOne(id: string): Promise<Project> {
    return this.projectRepository.findOne(id, { relations: ['employees'] });
  }

  update(id: string, updateProjectInput: UpdateProjectInput): Promise<Project> {
    const updateProject: Project =
      this.projectRepository.create(updateProjectInput);
    updateProject.id = id;
    return this.projectRepository.save(updateProject);
  }

  remove(id: string) {
    return this.remove(id);
  }
}
