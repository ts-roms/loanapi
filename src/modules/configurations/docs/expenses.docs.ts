import { applyDecorators, HttpStatus } from '@nestjs/common';
import { Doc } from "src/common/doc/decorators/doc.decorator";


export function ExpenseConfigCreateDoc(): MethodDecorator {
  return applyDecorators(
    Doc('expense-config.create', {
      auth: {
        jwtAccessToken: false,
      },
      response: {
        httpStatus: HttpStatus.CREATED
      }
    })
  )
}