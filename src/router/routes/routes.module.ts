import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { AuthModule } from 'src/common/auth/auth.module';
import { AwsModule } from 'src/common/aws/aws.module';
import { MessageController } from 'src/common/message/controllers/message.controller';
import { SettingController } from 'src/common/setting/controllers/setting.controller';
import { HealthController } from 'src/health/controllers/health.controller';
import { HealthModule } from 'src/health/health.module';
import { ConfigurationModule } from 'src/modules/configurations/configuration.module';
import { AccountingController } from 'src/modules/configurations/controllers/accounting.controller';
import { BranchController } from 'src/modules/configurations/controllers/branch.controller';
import { CustomFieldsController } from 'src/modules/configurations/controllers/custom-fields.controller';
import { EmployeeController } from 'src/modules/configurations/controllers/employee.controller';
import { ExpenseConfigController } from 'src/modules/configurations/controllers/expenses.controller';
import { OtherIncomeConfigController } from 'src/modules/configurations/controllers/other-income.controller';
import { RoleModule } from 'src/modules/role/role.module';
import { UserController } from 'src/modules/user/controllers/user.controller';
import { UserModule } from 'src/modules/user/user.module';

@Module({
  controllers: [
    HealthController,
    SettingController,
    UserController,
    MessageController,
    EmployeeController,
    BranchController,
    AccountingController,
    ExpenseConfigController,
    OtherIncomeConfigController,
    CustomFieldsController
  ],
  providers: [],
  exports: [],
  imports: [
    AwsModule,
    TerminusModule,
    UserModule,
    AuthModule,
    HealthModule,
    RoleModule,
    ConfigurationModule
  ],
})
export class RoutesModule {}
