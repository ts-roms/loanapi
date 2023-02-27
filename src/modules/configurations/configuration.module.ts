import { Module } from '@nestjs/common';
import { RepositoryModule } from './repository/repository.module';
import { BranchService } from './services/branch.service';
import { COAService } from './services/coa.service';
import { CustomFieldsService } from './services/custom-fields.service';
import { EmployeeService } from './services/employee.service';
import { ExpenseConfigService } from './services/expense.service';
import { OtherIncomeConfigService } from './services/other-income.service';

@Module({
  imports: [
    RepositoryModule
  ],
  exports: [
    EmployeeService,
    BranchService,
    COAService,
    ExpenseConfigService,
    OtherIncomeConfigService,
    CustomFieldsService
  ],
  providers: [
    EmployeeService,
    BranchService,
    COAService,
    ExpenseConfigService,
    OtherIncomeConfigService,
    CustomFieldsService
  ],
  controllers: []
})
export class ConfigurationModule { }