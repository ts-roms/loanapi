import { Controller, Post, Body, InternalServerErrorException } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";
import { ENUM_ERROR_STATUS_CODE_ERROR } from 'src/common/error/constants/error.status-code.constant';
import { Response } from 'src/common/response/decorators/response.decorator';
import { CustomFieldsCreateDoc } from '../docs/custom-fields.docs';
import { CustomFieldsDto } from '../dtos/custom-fields.dto';
import { CustomFieldsEntity } from '../repository/entities/custom-fields.entity';
import { CustomFieldsService } from "../services/custom-fields.service";


@ApiTags('modules.configurations.custom-fields')
@Controller({
  version: '1',
  path: '/custom-fields'
})
export class CustomFieldsController {
  /**
   *
   */
  constructor(
    private readonly customFieldsService: CustomFieldsService
  ) {

  }

  @CustomFieldsCreateDoc()
  @Response('custom-fields.create')
  @Post('/create')
  async create(
    @Body() { ...body }: CustomFieldsDto
  ): Promise<CustomFieldsEntity> {
    try {
      return this.customFieldsService.create(body);
    } catch (error) {
      throw new InternalServerErrorException({
        statusCode: ENUM_ERROR_STATUS_CODE_ERROR.ERROR_UNKNOWN,
        message: 'http.serverError.internalServerError',
        _error: error.message,
      });
    }
  }
}