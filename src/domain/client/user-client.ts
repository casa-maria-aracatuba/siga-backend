import { UserDto } from '../../application/dtos/user-dto';
import { Users } from '@prisma/client';

export abstract class UserClient {
  abstract register(data: UserDto, hashedPassword: string): Promise<Users>;
  abstract findByEmail(email: string): Promise<Users | null>;
}
