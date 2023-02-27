import { Injectable } from '@nestjs/common';
import { IDatabaseCreateOptions } from 'src/common/database/interfaces/database.interface';
import { CustomFieldsDto } from '../dtos/custom-fields.dto';
import { ICustomFieldsService } from '../interfaces/custom-fields.interace';
import { CustomFieldsEntity } from '../repository/entities/custom-fields.entity';
import { CustomFieldsRepository } from '../repository/repositories/custom-fields.repository';

@Injectable()
export class CustomFieldsService implements ICustomFieldsService {

  /**
   *
   */
  constructor(
    private readonly customFieldsRepository: CustomFieldsRepository
  ) {
    
  }


  async create(
    {...dto}: CustomFieldsDto,
    options?: IDatabaseCreateOptions
  ): Promise<CustomFieldsEntity> {

    const customFields: CustomFieldsEntity = new CustomFieldsEntity()
    customFields.userId = dto.userId;
    customFields.module = dto.module;
    customFields.fieldName = dto.fieldName;
    customFields.fieldType = dto.fieldType;
    customFields.required = dto.required;

    return this.customFieldsRepository.create<CustomFieldsEntity>(customFields, options);
  }

}