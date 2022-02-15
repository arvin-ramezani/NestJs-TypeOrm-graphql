import { CreateDogInput } from './create-dog.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDogInput extends PartialType(CreateDogInput) {
  @Field(() => Int)
  id: number;
}
