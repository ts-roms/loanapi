import { IDatabaseCreateOptions } from "src/common/database/interfaces/database.interface";
import { CustomFieldsDto } from "../dtos/custom-fields.dto";
import { CustomFieldsEntity } from "../repository/entities/custom-fields.entity";


export interface ICustomFieldsService {
  create(
    data: CustomFieldsDto,
    options?: IDatabaseCreateOptions
  ): Promise<CustomFieldsEntity>;
}