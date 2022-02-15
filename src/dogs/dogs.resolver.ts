import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DogsService } from './dogs.service';
import { Dog } from './entities/dog.entity';
import { CreateDogInput } from './dto/create-dog.input';
import { UpdateDogInput } from './dto/update-dog.input';

@Resolver(() => Dog)
export class DogsResolver {
  constructor(private readonly dogsService: DogsService) {}

  @Mutation(() => Dog)
  createDog(@Args('createDogInput') createDogInput: CreateDogInput) {
    return this.dogsService.create(createDogInput);
  }

  @Query(() => [Dog], { name: 'dogs' })
  findAll() {
    return this.dogsService.findAll();
  }

  @Query(() => Dog, { name: 'dog' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.dogsService.findOne(id);
  }

  @Mutation(() => Dog)
  updateDog(@Args('updateDogInput') updateDogInput: UpdateDogInput) {
    return this.dogsService.update(updateDogInput.id, updateDogInput);
  }

  @Mutation(() => Dog)
  removeDog(@Args('id', { type: () => Int }) id: number) {
    return this.dogsService.remove(id);
  }
}
