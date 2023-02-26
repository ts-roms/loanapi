import { Body, Post, Controller, InternalServerErrorException } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";
import { ExpenseConfigDto } from '../dtos/expenses.dto';
import { ExpenseConfigEntity } from '../repository/entities/expenses.entity';
import { Response, ResponsePaging } from "src/common/response/decorators/response.decorator";
import { ExpenseConfigCreateDoc } from '../docs/expenses.docs';
import { ENUM_ERROR_STATUS_CODE_ERROR } from 'src/common/error/constants/error.status-code.constant';
import { ExpenseConfigService } from '../services/expense.service';

@ApiTags('module.configuration.expenses')
@Controller({
  version: '1',
  path: '/expenses'
})
export class ExpenseConfigController {

  constructor(
    private readonly expenseConfigService: ExpenseConfigService
  ) { }

  @ExpenseConfigCreateDoc()
  @Response('expense-config.create')
  @Post('/create')
  async create(
    @Body() { ...body }: ExpenseConfigDto,
  ): Promise<ExpenseConfigEntity> {
    try {
      return this.expenseConfigService.create(body)
    } catch (error) {
      throw new InternalServerErrorException({
        statusCode: ENUM_ERROR_STATUS_CODE_ERROR.ERROR_UNKNOWN,
        message: 'http.serverError.internalServerError',
        _error: error.message,
      });
    }
  }
}