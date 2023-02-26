import { Type } from "class-transformer";
import { IsNotEmpty, IsUUID } from "class-validator";


export class COARequestDto {
  @IsNotEmpty()
  @IsUUID('4')
  @Type(() => String)
  coa: string;
}