import { faker } from "@faker-js/faker";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";


export class ContactDetailsDto {

  @ApiProperty({
    required: true,
    example: faker.datatype.uuid(),
  })
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  readonly userId: string;

  @ApiProperty({
    required: true,
    example: faker.phone.number()
  })
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  readonly contactNumber: string;

  @ApiProperty({
    required: true,
    example: faker.internet.email()
  })
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  readonly emailAddress: string;

  @ApiProperty({
    required: true,
    example: faker.address.street()
  })
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  readonly street: string;

  @ApiProperty({
    required: true,
    example: faker.address.city()
  })
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  readonly city: string;

  @ApiProperty({
    required: true,
    example: faker.address.state()
  })
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  readonly province: string;

  @ApiProperty({
    required: true,
    example: faker.address.state()
  })
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  readonly state: string;

  @ApiProperty({
    required: true,
    example: faker.address.country()
  })
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  readonly country: string;

  @ApiProperty({
    required: true,
    example: faker.address.countryCode()
  })
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  readonly postalCode: string
}