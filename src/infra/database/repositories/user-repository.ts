import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma-service";
import { Users } from "@prisma/client";
import { UserDto } from "../../../application/dtos/user-dto";
import { UserClient } from "../../../domain/client/user-client";

@Injectable()
export class UserRepository implements UserClient {
  constructor(private prismaService: PrismaService) {}
  async register(data: UserDto, hashedPassword: string): Promise<Users> {
    try {
      return await this.prismaService.users.create({
        data: {
          name: data.name,
          email: data.email,
          password: hashedPassword,
          role: data.role,
        },
      });
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(`Erro ao registrar o usuário: ${err.message}`);
      } else {
        throw new Error('Erro desconhecido ao registrar o usuário');
      }
    }
  }

  async findByEmail(email: string): Promise<Users | null> {
    try {
      return await this.prismaService.users.findUnique({
        where: {
          email: email,
        },
      });
    } catch (err: any) {
      return null;
    }
  }
}
