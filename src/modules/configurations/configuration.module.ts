import { Module } from '@nestjs/common';
import { RepositoryModule } from './repository/repository.module';
import { BranchService } from './services/branch.service';
import { COAService } from './services/coa.service';
import { EmployeeService } from './services/employee.service';
import { ExpenseConfigService } from './services/expense.service';

@Module({
  imports: [
    RepositoryModule
  ],
  exports: [
    EmployeeService,
    BranchService,
    COAService,
    ExpenseConfigService
  ],
  providers: [
    EmployeeService,
    BranchService,
    COAService,
    ExpenseConfigService
  ],
  controllers: []
})
export class ConfigurationModule { }