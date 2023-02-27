import { faker } from "@faker-js/faker";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsString } from "class-validator";

export class CustomFieldsDto {

  @ApiProperty({
    required: true,
    example: faker.datatype.uuid()
  })
  @IsString()
  @Type(() => String)
  readonly userId: string;

  @ApiProperty({
    required: true,
    example: faker.datatype.string()
  })
  @IsString()
  @Type(() => String)
  readonly module: string;

  @ApiProperty({
    required: true,
    example: faker.datatype.string()
  })
  @IsString()
  @Type(() => String)
  readonly fieldName: string;

  @ApiProperty({
    required: true,
    example: faker.datatype.boolean()
  })
  @IsString()
  @Type(() => String)
  readonly required: boolean;

  @ApiProperty({
    required: true,
    example: faker.datatype.string()
  })
  @IsString()
  @Type(() => String)
  readonly fieldType: string;
}