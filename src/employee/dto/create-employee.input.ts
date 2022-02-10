import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class createEmployeeDTO {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  designation: string;

  @Field({ nullable: true })
  city: string;
}
