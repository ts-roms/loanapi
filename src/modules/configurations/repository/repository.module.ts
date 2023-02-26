import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose';
import { DATABASE_CONNECTION_NAME } from 'src/common/database/constants/database.constant';
import { BranchEntity, BranchSchema } from './entities/branch.entity';
import { COAEntity, COASchema } from './entities/coa.entity';
import { ContactDetailsEntity, ContactDetailsSchema } from './entities/contact-details.entity';
import { EmployeeEntity, EmployeeSchema } from './entities/employee.entity';
import { EmploymentEntity, EmploymentSchema } from './entities/employment.entity';
import { ExpenseConfigEntity, ExpenseConfigSchema } from './entities/expenses.entity';
import { BranchRepository } from './repositories/branch.repository';
import { COARepository } from './repositories/coa.repository';
import { ContactDetailsRepository } from './repositories/contact-details.repository';
import { EmployeeRepository } from './repositories/employee.repository';
import { EmploymentRepository } from './repositories/employment.repository';
import { ExpenseConfigRepository } from './repositories/expenses.repository';

@Module({
  providers: [
    EmployeeRepository,
    ContactDetailsRepository,
    EmploymentRepository,
    BranchRepository,
    COARepository,
    ExpenseConfigRepository
  ],
  exports: [
    EmployeeRepository,
    ContactDetailsRepository,
    EmploymentRepository,
    BranchRepository,
    COARepository,
    ExpenseConfigRepository
  ],
  controllers: [],
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: EmployeeEntity.name,
          schema: EmployeeSchema
        },
        {
          name: ContactDetailsEntity.name,
          schema: ContactDetailsSchema
        },
        {
          name: EmploymentEntity.name,
          schema: EmploymentSchema
        },
        {
          name: BranchEntity.name,
          schema: BranchSchema
        },
        {
          name: COAEntity.name,
          schema: COASchema
        },
        {
          name: ExpenseConfigEntity.name,
          schema: ExpenseConfigSchema
        }
      ],
      DATABASE_CONNECTION_NAME
    )
  ]
})
export class RepositoryModule { }