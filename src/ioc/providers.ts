import { AssistedPersonClient } from '../domain/client/assisted-person-client';
import { AssistedPersonRepository } from '../infra/database/repositories/assisted-person-repository';
import { UserRepository } from '../infra/database/repositories/user-repository';
import { UserClient } from '../domain/client/user-client';

export const providers = [
  {
    provide: AssistedPersonClient,
    useClass: AssistedPersonRepository,
  },
  {
    provide: UserClient,
    useClass: UserRepository,
  },
];
