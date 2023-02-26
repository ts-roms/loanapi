import { Injectable } from '@nestjs/common';
import { IDatabaseCreateOptions } from 'src/common/database/interfaces/database.interface';
import { ExpenseConfigDto } from '../dtos/expenses.dto';
import { IExpenseConfigService } from "../interfaces/expenses.interface";
import { ExpenseConfigEntity } from '../repository/entities/expenses.entity';
import { ExpenseConfigRepository } from '../repository/repositories/expenses.repository';

@Injectable()
export class ExpenseConfigService implements IExpenseConfigService {
  /**
   *
   */
  constructor(
    private readonly expenseConfigRepository: ExpenseConfigRepository
  ) {

  }

  create(
    { ...dto }: ExpenseConfigDto,
    options?: IDatabaseCreateOptions
  ): Promise<ExpenseConfigEntity> {
    const expense: ExpenseConfigEntity = new ExpenseConfigEntity();
    expense.name = dto.name,
      expense.accountId = dto.accountId
    return this.expenseConfigRepository.create<ExpenseConfigDto>(expense, options);
  }
}
