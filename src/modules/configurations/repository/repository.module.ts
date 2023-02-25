import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose';
import { DATABASE_CONNECTION_NAME } from 'src/common/database/constants/database.constant';
import { BranchEntity, BranchSchema } from './entities/branch.entity';
import { ContactDetailsEntity, ContactDetailsSchema } from './entities/contact-details.entity';
import { EmployeeEntity, EmployeeSchema } from './entities/employee.entity';
import { EmploymentEntity, EmploymentSchema } from './entities/employment.entity';
import { BranchRepository } from './repositories/branch.repository';
import { ContactDetailsRepository } from './repositories/contact-details.repository';
import { EmployeeRepository } from './repositories/employee.repository';
import { EmploymentRepository } from './repositories/employment.repository';

@Module({
  providers: [
    EmployeeRepository,
    ContactDetailsRepository,
    EmploymentRepository,
    BranchRepository
  ],
  exports: [
    EmployeeRepository,
    ContactDetailsRepository,
    EmploymentRepository,
    BranchRepository
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
        }
      ],
      DATABASE_CONNECTION_NAME
    )
  ]
})
export class RepositoryModule { }