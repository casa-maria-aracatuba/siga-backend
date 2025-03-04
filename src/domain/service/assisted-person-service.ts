import { Injectable, NotFoundException } from '@nestjs/common';
import { AssistedPersonClient } from '../client/assisted-person-client';
import { AssistedPersonDto } from '../../application/dtos/assisted-person-dto';

@Injectable()
export class AssistedPersonService {
  constructor(private readonly assistedPersonClient: AssistedPersonClient) {}

  async create(createAssistedPersonDto: AssistedPersonDto): Promise<any> {
    return await this.assistedPersonClient.create(createAssistedPersonDto);
  }
  async findAll() {
    return await this.assistedPersonClient.findAll();
  }
  async findById(id: number) {
    const person = this.assistedPersonClient.findById(id);
    if (!person) {
      throw new NotFoundException(`Person with ID ${id} not found`);
    }
    return person;
  }
  async update(id: number, data: AssistedPersonDto) {
    const person = await this.assistedPersonClient.findById(id);
    if (!person) {
      throw new NotFoundException(`Person with ID ${id} not found`);
    }
    return await this.assistedPersonClient.update(id, data);
  }
  async delete(id: number): Promise<void> {
    const person = this.assistedPersonClient.findById(id);

    if (!person) {
      throw new NotFoundException(`Person with ID ${id} not found`);
    }
    return await this.assistedPersonClient.delete(id);
  }
}
