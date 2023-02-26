import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { DatabaseMongoUUIDRepositoryAbstract } from "src/common/database/abstracts/mongo/repositories/database.mongo.uuid.repository.abstract";
import { DatabaseModel } from "src/common/database/decorators/database.decorator";
import { ExpenseConfigEntity } from "../entities/expenses.entity";

@Injectable()
export class ExpenseConfigRepository extends DatabaseMongoUUIDRepositoryAbstract<ExpenseConfigEntity> {
  constructor(
    @DatabaseModel(ExpenseConfigEntity.name)
    private readonly expenseConfigModel: Model<ExpenseConfigEntity>
  ) {
    super(expenseConfigModel)
  }
}