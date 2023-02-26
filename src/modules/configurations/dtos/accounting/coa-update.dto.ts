import { PickType } from "@nestjs/swagger";
import { COADto } from "./coa.dto";


export class COAUpdateDto extends PickType(COADto, [
  'name',
  'code',
  'note'
] as const) { }