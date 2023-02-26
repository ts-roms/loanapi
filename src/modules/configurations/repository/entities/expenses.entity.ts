import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { CallbackWithoutResultAndOptionalError } from "mongoose";
import { DatabaseMongoUUIDEntityAbstract } from "src/common/database/abstracts/mongo/entities/database.mongo.uuid.entity.abstract";
import { DatabaseEntity } from "src/common/database/decorators/database.decorator";

export const ExpenseConfigDatabaseName = 'expense_config'

@DatabaseEntity({ collection: ExpenseConfigDatabaseName })
export class ExpenseConfigEntity extends DatabaseMongoUUIDEntityAbstract {
  @Prop({
    required: true,
    index: true,
    trim: true,
    type: String
  })
  name: string;

  @Prop({
    required: true,
    index: true,
    trim: true,
    type: String
  })
  accountId: string;
}

export const ExpenseConfigSchema = SchemaFactory.createForClass(ExpenseConfigEntity);

ExpenseConfigSchema.pre('save', function (next: CallbackWithoutResultAndOptionalError) {
  next()
})