import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateProjectInput {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field(() => Int)
  code: number;
}
