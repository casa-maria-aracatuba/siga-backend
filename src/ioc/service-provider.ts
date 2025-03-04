import { Provider } from '@nestjs/common';
import { AssistedPersonService } from '../domain/service/assisted-person-service';
import { PrismaService } from '../infra/database/prisma/prisma-service';

export const serviceProviders: Provider[] = [
  AssistedPersonService,
  PrismaService,
];
