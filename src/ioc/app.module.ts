import { Module } from '@nestjs/common';
import { providers } from './providers';
import { serviceProviders } from './service-provider';
import { AssistedPersonRepository } from '../infra/database/repositories/assisted-person-repository';
import { AssistedPersonController } from '../infra/http/controllers/assisted-person-controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../domain/strategy/jwt-strategy';
import { UserRepository } from "../infra/database/repositories/user-repository";
import { UserController } from "../infra/http/controllers/user-controller";
import { AuthController } from "../infra/http/controllers/auth-controller";
@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'default-secret',
      signOptions: { expiresIn: '60m' },
    }),
  ],
  controllers: [AssistedPersonController, UserController, AuthController],
  providers: [
    AssistedPersonRepository,
    UserRepository,
    JwtStrategy,
    ...serviceProviders,
    ...providers,
  ],
})
export class AppModule {}
