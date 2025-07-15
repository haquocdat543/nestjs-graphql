// update-user.input.ts
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateUserDTO } from './CreateUserDTO';

@InputType()
export class UpdateUserDTO extends PartialType(CreateUserDTO) {
	@Field(() => String)
	id: string;
}

