import { Controller, Post, Body } from '@nestjs/common';
import { UserDto } from '../../../application/dtos/user-dto';
import { UserService } from '../../../domain/service/user-service';
@Controller('auth')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('register')
  async register(@Body() userDto: UserDto) {
    return this.userService.register(userDto);
  }
}
