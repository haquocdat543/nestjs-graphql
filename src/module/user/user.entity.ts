import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType() // GraphQL Type
@Entity()     // TypeORM Entity
export class User {
  @Field(() => ID)
	@PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column({ unique: true })
  name: string;

  @Field()
  @Column({ unique: true })
  email: string;

  @Field(() => Int)
  @Column()
  age: number;
}

