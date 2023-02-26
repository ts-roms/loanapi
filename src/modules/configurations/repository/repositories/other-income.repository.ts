import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { DatabaseMongoUUIDRepositoryAbstract } from "src/common/database/abstracts/mongo/repositories/database.mongo.uuid.repository.abstract";
import { DatabaseModel } from "src/common/database/decorators/database.decorator";
import { OtherIncomeConfigEntity } from "../entities/other-income.entity";

@Injectable()
export class OtherIncomeConfigRepository extends DatabaseMongoUUIDRepositoryAbstract<OtherIncomeConfigEntity> {
  constructor(
    @DatabaseModel(OtherIncomeConfigEntity.name)
    private readonly otherIncomeConfigModel: Model<OtherIncomeConfigEntity>
  ) {
    super(otherIncomeConfigModel)
  }
}