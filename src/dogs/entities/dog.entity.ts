import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Dog {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  age: string;

  @Column({ enum: ['male', 'female'] })
  @Field()
  gender: string;

  @Column()
  @Field()
  price: number;

  
}
