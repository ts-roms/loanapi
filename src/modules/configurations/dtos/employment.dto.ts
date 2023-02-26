import { faker } from "@faker-js/faker";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";


export class EmploymentDto {
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
    example: faker.date.birthdate()
  })
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  readonly joiningDate: string;

  @ApiProperty({
    required: true,
    example: faker.datatype.uuid(),
  })
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  readonly branchId: string;

  @ApiProperty({
    required: true,
    example: faker.datatype.uuid(),
  })
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  readonly loanOfficerId: string;

  @ApiProperty({
    required: true,
    example: faker.random.numeric()
  })
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  readonly salaryRange: string;

  @ApiProperty({
    required: true,
    example: faker.lorem.sentence(2)
  })
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  readonly description: string;
}