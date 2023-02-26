import { IDatabaseCreateOptions } from "src/common/database/interfaces/database.interface";
import { ExpenseConfigDto } from "../dtos/expenses.dto";


export interface  IExpenseConfigService {


  create(
    data: ExpenseConfigDto,
    options?: IDatabaseCreateOptions
  ): Promise<ExpenseConfigDto>
}