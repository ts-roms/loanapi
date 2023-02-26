import { Model } from "mongoose";
import { DatabaseMongoUUIDRepositoryAbstract } from "src/common/database/abstracts/mongo/repositories/database.mongo.uuid.repository.abstract";
import { DatabaseModel } from "src/common/database/decorators/database.decorator";
import { COAEntity } from "../entities/coa.entity";


export class COARepository extends DatabaseMongoUUIDRepositoryAbstract<COAEntity> {
  constructor(
    @DatabaseModel(COAEntity.name)
    private readonly coaModel: Model<COAEntity>
  ) {
    super(coaModel)
  }
}