import { Controller, Post, Body, InternalServerErrorException } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";
import { EmployeeCreateDoc } from '../docs/employee.docs';
import { EmployeeEntity } from '../repository/entities/employee.entity';
import { Response } from "src/common/response/decorators/response.decorator";
import { EmployeeDto } from '../dtos/employee.dto';
import { ENUM_ERROR_STATUS_CODE_ERROR } from 'src/common/error/constants/error.status-code.constant';
import { EmployeeService } from '../services/employee.service';
@ApiTags('modules.configuration.employee')
@Controller({
  version: '1',
  path: '/employee'
})
export class EmployeeController {
  /**
   *
   */
  constructor(
    private readonly employeeService: EmployeeService
  ) {
    
  }


  @EmployeeCreateDoc()
  @Response('employee.create')
  @Post('/create')
  async create(
    @Body() { ...body }: EmployeeDto
  ): Promise<EmployeeEntity> {

    try {
      return this.employeeService.create(body);
    } catch (error) {
      throw new InternalServerErrorException({
        statusCode: ENUM_ERROR_STATUS_CODE_ERROR.ERROR_UNKNOWN,
        message: 'http.serverError.internalServerError',
        _error: error.message,
      });
    }
  }
}