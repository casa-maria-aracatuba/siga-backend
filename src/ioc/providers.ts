import { AssistedPersonClient } from '../domain/client/assisted-person-client';
import { AssistedPersonRepository } from '../infra/database/repositories/assisted-person-repository';

export const providers = [
  {
    provide: AssistedPersonClient,
    useClass: AssistedPersonRepository,
  },
];
