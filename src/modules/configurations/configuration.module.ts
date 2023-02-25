import { Module } from '@nestjs/common';
import { RepositoryModule } from './repository/repository.module';
import { EmployeeService } from './services/employee.service';

@Module({
  imports: [
    RepositoryModule
  ],
  exports: [
    EmployeeService
  ],
  providers: [
    EmployeeService
  ],
  controllers: []
})
export class ConfigurationModule { }