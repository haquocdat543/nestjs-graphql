// create-user.input.ts
import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateUserDTO {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field(() => Int)
  age: number;
}

