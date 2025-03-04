import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import { UserClient } from '../client/user-client';

@Injectable()
export class AuthService {
  constructor(private userClient: UserClient) {}

  async validateUser(email: string, password: string) {
    const user = await this.userClient.findByEmail(email);

    if (!user) throw new UnauthorizedException('Credenciais inválidas');

    const passwordValid = await bcrypt.compare(password, user.password);

    if (!passwordValid)
      throw new UnauthorizedException('Credenciais inválidas');

    return user;
  }

  async login(email: string, password: string) {
    const user = await this.validateUser(email, password);

    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: '1h',
      },
    );

    return { token };
  }
}
