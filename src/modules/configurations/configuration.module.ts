import { Module } from '@nestjs/common';
import { RepositoryModule } from './repository/repository.module';
import { BranchService } from './services/branch.service';
import { COAService } from './services/coa.service';
import { EmployeeService } from './services/employee.service';

@Module({
  imports: [
    RepositoryModule
  ],
  exports: [
    EmployeeService,
    BranchService,
    COAService
  ],
  providers: [
    EmployeeService,
    BranchService,
    COAService
  ],
  controllers: []
})
export class ConfigurationModule { }