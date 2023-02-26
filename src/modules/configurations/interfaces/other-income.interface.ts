import { IDatabaseCreateOptions } from "src/common/database/interfaces/database.interface";
import { OtherIncomeConfigDto } from "../dtos/other-income.dto";


export interface  IOtherIncomeConfigService {


  create(
    data: OtherIncomeConfigDto,
    options?: IDatabaseCreateOptions
  ): Promise<OtherIncomeConfigDto>
}