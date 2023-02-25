import { applyDecorators, HttpStatus } from "@nestjs/common";
import { Doc } from "src/common/doc/decorators/doc.decorator";


export function EmployeeCreateDoc(): MethodDecorator {
  return applyDecorators(
    Doc('employee.create', {
      auth: {
        jwtAccessToken: false,
      },
      response: {
        httpStatus: HttpStatus.CREATED
      }
    })
  )
}