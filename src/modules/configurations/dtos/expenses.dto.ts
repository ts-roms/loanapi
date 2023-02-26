import { faker } from "@faker-js/faker";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsString } from "class-validator";

export class ExpenseConfigDto {
  @ApiProperty({
    required: true,
    example: faker.finance.accountName()
  })
  @IsString()
  @Type(() => String)
  readonly name: string;


  @ApiProperty({
    required: true,
    example: faker.datatype.uuid()
  })
  @IsString()
  @Type(() => String)
  readonly accountId: string;
}