import { applyDecorators, createParamDecorator, ExecutionContext, UseGuards } from "@nestjs/common";
import { COANotFound } from "../guards/coa.not-found.guard";
import { COARequestGuard } from "../guards/coa.requests.guard";
import { ICOAEntity } from "../interfaces/coa.interface";

export const GetCOA = createParamDecorator(
  (data: string, ctx: ExecutionContext): ICOAEntity => {
    const { __coa } = ctx.switchToHttp().getRequest();
    return __coa;
  }
)


export function COADeleteGuard(): MethodDecorator {
  return applyDecorators(UseGuards(COARequestGuard, COANotFound));
}