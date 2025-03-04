import { AssistedPersonDto } from 'src/application/dtos/assisted-person-dto';
import { AssistedPeople } from '@prisma/client';

export abstract class AssistedPersonClient {
  abstract create(data: AssistedPersonDto): Promise<AssistedPeople>;
  abstract findAll(): Promise<AssistedPeople[]>;
  abstract findById(id: number): Promise<AssistedPeople | null>;
  abstract update(
    id: number,
    data: AssistedPersonDto,
  ): Promise<AssistedPeople | Error>;
  abstract delete(id: number): Promise<void>;
}
