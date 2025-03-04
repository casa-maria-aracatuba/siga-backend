import {
  IsNotEmpty,
  IsString,
  IsDate,
  IsEnum,
  IsNumber,
  IsOptional,
  IsDecimal,
  IsUUID,
} from 'class-validator';

export class AssistedPersonDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsDate()
  birthDate: Date;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsString()
  street: string;

  @IsNotEmpty()
  @IsString()
  number: string;

  @IsNotEmpty()
  @IsString()
  neighborhood: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  state: string;

  @IsNotEmpty()
  @IsString()
  zipCode: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsNotEmpty()
  @IsString()
  document: string;

  @IsNotEmpty()
  @IsEnum(['single', 'married', 'divorced', 'widowed', 'other'])
  maritalStatus: string;

  @IsNotEmpty()
  @IsNumber()
  childrenCount: number;

  @IsNotEmpty()
  @IsDecimal()
  familyIncome: number;

  @IsNotEmpty()
  @IsEnum(['none', 'primary', 'secondary', 'tertiary', 'other'])
  educationLevel: string;

  @IsNotEmpty()
  @IsEnum(['employed', 'unemployed', 'retired', 'student'])
  employmentStatus: string;

  @IsNotEmpty()
  @IsEnum(['owned', 'rented', 'other'])
  housingType: string;

  @IsOptional()
  @IsUUID()
  documentHash?: string;

  @IsOptional()
  @IsUUID()
  photoHash?: string;

  @IsOptional()
  @IsString()
  description?: string;
}
