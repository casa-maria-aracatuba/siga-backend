import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../../../domain/service/auth-service';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('login')
  async login(
    @Body() { email, password }: { email: string; password: string },
  ) {
    return this.authService.login(email, password);
  }
}
