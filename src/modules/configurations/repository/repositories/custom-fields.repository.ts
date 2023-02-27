import { Injectable } from '@nestjs/common'
import { Model } from 'mongoose';
import { DatabaseMongoUUIDRepositoryAbstract } from 'src/common/database/abstracts/mongo/repositories/database.mongo.uuid.repository.abstract';
import { DatabaseModel } from 'src/common/database/decorators/database.decorator';
import { CustomFieldsEntity } from '../entities/custom-fields.entity';

@Injectable()
export class CustomFieldsRepository extends DatabaseMongoUUIDRepositoryAbstract<CustomFieldsEntity> {

  /**
   *
   */
  constructor(
    @DatabaseModel(CustomFieldsEntity.name)
    private readonly customFieldsModel: Model<CustomFieldsEntity>
  ) {
    super(customFieldsModel)
  }
}