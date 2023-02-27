import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { CallbackWithoutResultAndOptionalError } from 'mongoose';
import { DatabaseMongoUUIDEntityAbstract } from "src/common/database/abstracts/mongo/entities/database.mongo.uuid.entity.abstract";
import { DatabaseEntity } from "src/common/database/decorators/database.decorator";

export const CustomFieldsDatabaseName = 'custom_fields';


@DatabaseEntity({ collection: CustomFieldsDatabaseName })
export class CustomFieldsEntity extends DatabaseMongoUUIDEntityAbstract {
  
  @Prop({
    required: true,
    trim: true,
    type: String,
  })
  userId: string;

  @Prop({
    required: true,
    trim: true,
    type: String,
  })
  module: string;

  @Prop({
    required: true,
    trim: true,
    type: String,
  })
  fieldName: string;

  @Prop({
    required: true,
    trim: true,
    type: Boolean,
  })
  required: boolean;

  @Prop({
    required: true,
    trim: true,
    type: String,
  })
  fieldType: string;
}

export const CustomFieldsSchema = SchemaFactory.createForClass(CustomFieldsEntity);

CustomFieldsSchema.pre('save', function (next: CallbackWithoutResultAndOptionalError) {
  next();
})