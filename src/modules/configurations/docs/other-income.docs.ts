import { applyDecorators, HttpStatus } from '@nestjs/common';
import { Doc } from "src/common/doc/decorators/doc.decorator";


export function OtherIncomeConfigCreateDoc(): MethodDecorator {
  return applyDecorators(
    Doc('otherIncome-config.create', {
      auth: {
        jwtAccessToken: false,
      },
      response: {
        httpStatus: HttpStatus.CREATED
      }
    })
  )
}