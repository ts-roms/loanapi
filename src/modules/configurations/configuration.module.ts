import { Module } from '@nestjs/common';
import { RepositoryModule } from './repository/repository.module';
import { BranchService } from './services/branch.service';
import { EmployeeService } from './services/employee.service';

@Module({
  imports: [
    RepositoryModule
  ],
  exports: [
    EmployeeService,
    BranchService
  ],
  providers: [
    EmployeeService,
    BranchService
  ],
  controllers: []
})
export class ConfigurationModule { }