import { applyDecorators, HttpStatus } from "@nestjs/common";
import { Doc } from "src/common/doc/decorators/doc.decorator";



export function CustomFieldsCreateDoc(): MethodDecorator {
  return applyDecorators(
    Doc('custom-fields.create', {
      auth: {
        jwtAccessToken: false,
      },
      response: {
        httpStatus: HttpStatus.CREATED
      }
    })
  )
}