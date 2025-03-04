import { Module } from '@nestjs/common';
import { providers } from './ioc/providers';
import { serviceProviders } from './ioc/service-provider';
import { AssistedPersonRepository } from './infra/database/repositories/assisted-person-repository';
import { AssistedPersonController } from './infra/http/controllers/assisted-person-controller';

@Module({
  imports: [],
  controllers: [AssistedPersonController],
  providers: [AssistedPersonRepository, ...serviceProviders, ...providers],
})
export class AppModule {}
