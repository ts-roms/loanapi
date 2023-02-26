import { Body, Post, Controller, InternalServerErrorException } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";
import { OtherIncomeConfigDto } from '../dtos/other-income.dto';
import { OtherIncomeConfigEntity } from '../repository/entities/other-income.entity';
import { Response, ResponsePaging } from "src/common/response/decorators/response.decorator";
import { OtherIncomeConfigCreateDoc } from '../docs/other-income.docs';
import { ENUM_ERROR_STATUS_CODE_ERROR } from 'src/common/error/constants/error.status-code.constant';
import { OtherIncomeConfigService } from '../services/other-income.service';

@ApiTags('module.configuration.other-income')
@Controller({
  version: '1',
  path: '/other-income'
})
export class OtherIncomeConfigController {

  constructor(
    private readonly otherIncomeConfigService: OtherIncomeConfigService
  ) { }

  @OtherIncomeConfigCreateDoc()
  @Response('otherIncome-config.create')
  @Post('/create')
  async create(
    @Body() { ...body }: OtherIncomeConfigDto,
  ): Promise<OtherIncomeConfigEntity> {
    try {
      return this.otherIncomeConfigService.create(body)
    } catch (error) {
      throw new InternalServerErrorException({
        statusCode: ENUM_ERROR_STATUS_CODE_ERROR.ERROR_UNKNOWN,
        message: 'http.serverError.internalServerError',
        _error: error.message,
      });
    }
  }
}