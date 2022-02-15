import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateDogInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
