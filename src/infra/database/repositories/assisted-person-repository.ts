import { Injectable } from '@nestjs/common';
import { AssistedPersonDto } from 'src/application/dtos/assisted-person-dto';
import { AssistedPersonClient } from 'src/domain/client/assisted-person-client';
import { PrismaService } from '../prisma/prisma-service';
import { AssistedPeople } from '@prisma/client';

@Injectable()
export class AssistedPersonRepository implements AssistedPersonClient {
  constructor(private prismaService: PrismaService) {}

  async create(data: AssistedPersonDto): Promise<AssistedPeople> {
    try {
      const people = await this.prismaService.assistedPeople.create({
        data: {
          name: data.name,
          birthDate: new Date(data.birthDate),
          phone: data.phone,
          street: data.street,
          number: data.number,
          neighborhood: data.neighborhood,
          city: data.city,
          state: data.state,
          zipCode: data.zipCode,
          email: data.email,
          document: data.document,
          maritalStatus: data.maritalStatus,
          childrenCount: data.childrenCount,
          familyIncome: data.familyIncome,
          educationLevel: data.educationLevel,
          employmentStatus: data.employmentStatus,
          housingType: data.housingType,
          documentHash: data.documentHash,
          photoHash: data.photoHash,
          description: data.description,
        },
      });
      return people;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async findAll(): Promise<AssistedPeople[]> {
    try {
      return await this.prismaService.assistedPeople.findMany();
    } catch (err: any) {
      if (err) {
        return null;
      }
    }
  }

  async findById(id: number): Promise<AssistedPeople | null> {
    try {
      return await this.prismaService.assistedPeople.findUnique({
        where: {
          id: id,
        },
      });
    } catch (err: any) {
      if (err) {
        return null;
      }
    }
  }

  async update(
    id: number,
    data: AssistedPersonDto,
  ): Promise<AssistedPeople | Error> {
    try {
      return await this.prismaService.assistedPeople.update({
        where: {
          id: id,
        },
        data: {
          name: data.name,
          birthDate: new Date(data.birthDate),
          phone: data.phone,
          street: data.street,
          number: data.number,
          neighborhood: data.neighborhood,
          city: data.city,
          state: data.state,
          zipCode: data.zipCode,
          email: data.email,
          document: data.document,
          maritalStatus: data.maritalStatus,
          childrenCount: data.childrenCount,
          familyIncome: data.familyIncome,
          educationLevel: data.educationLevel,
          employmentStatus: data.employmentStatus,
          housingType: data.housingType,
          documentHash: data.documentHash,
          photoHash: data.photoHash,
          description: data.description,
        },
      });
    } catch (err: any) {
      throw new Error(err);
    }
  }

  async delete(id: number): Promise<void> {
    try {
      await this.prismaService.assistedPeople.delete({
        where: {
          id: id,
        },
      });
    } catch (err: any) {
      throw new Error(err);
    }
  }
  async findByEmail(data: any): Promise<null | any> {
    try {
      return await this.prismaService.assistedPeople.findFirst({
        where: {
          email: data.email,
        },
      });
    } catch (err: any) {
      if (err) {
        return null;
      }
    }
  }
}
