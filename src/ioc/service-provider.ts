import { Provider } from '@nestjs/common';
import { AssistedPersonService } from '../domain/service/assisted-person-service';
import { PrismaService } from '../infra/database/prisma/prisma-service';
import { UserService } from '../domain/service/user-service';
import { AuthService } from '../domain/service/auth-service';

export const serviceProviders: Provider[] = [
  AssistedPersonService,
  AuthService,
  UserService,
  PrismaService,
];
