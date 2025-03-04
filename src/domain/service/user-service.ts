import { Injectable } from '@nestjs/common';
import { UserDto } from '../../application/dtos/user-dto';
import * as bcrypt from 'bcryptjs';
import { UserClient } from '../client/user-client';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    private readonly userClient: UserClient,
    private readonly jwtService: JwtService,
  ) {}

  async register(userDto: UserDto): Promise<{ access_token: string }> {
    const { password } = userDto;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const user = await this.userClient.register(userDto, hashedPassword);

      if (!user) {
        throw new Error('Erro ao criar o usuário');
      }

      const payload = { email: user.email, sub: user.id };
      const access_token = this.jwtService.sign(payload);

      return { access_token };
    } catch (error) {
      throw new Error(`Erro durante o registro: ${error.message}`);
    }
  }
}
