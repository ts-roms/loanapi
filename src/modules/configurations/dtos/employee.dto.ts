import { faker } from "@faker-js/faker";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNotEmpty, IsObject, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { ContactDetailsDto } from "./contact-details.dto";
import { EmploymentDto } from "./employment.dto";

export class EmployeeDto {
  @ApiProperty({
    required: false,
    example: 'Mr.'
  })
  @IsString()
  @Type(() => String)
  readonly salutation: string;

  @ApiProperty({
    example: faker.name.firstName(),
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(30)
  @Type(() => String)
  readonly firstName: string;

  @ApiProperty({
    example: faker.name.lastName(),
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(30)
  @Type(() => String)
  readonly lastName: string;

  @ApiProperty({
    example: faker.name.middleName(),
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(30)
  @Type(() => String)
  readonly middleName: string;

  @ApiProperty({
    example: faker.name.sex(),
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(30)
  @Type(() => String)
  readonly gender: string;

  @ApiProperty({
    required: true,
    example: faker.date.birthdate() 
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(30)
  @Type(() => String)
  readonly birthdate: string;

  @ApiProperty({
    required: true
  })
  @IsObject()
  @IsNotEmpty()
  @Type(() => ContactDetailsDto)
  readonly contactDetails: ContactDetailsDto

  @ApiProperty({
    required: true
  })
  @IsObject()
  @IsNotEmpty()
  @Type(() => EmploymentDto)
  readonly employmentDetails: EmploymentDto
}