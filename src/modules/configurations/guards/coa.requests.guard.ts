import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { ICOAEntity } from "../interfaces/coa.interface";
import { COAService } from "../services/coa.service";

@Injectable()
export class COARequestGuard implements CanActivate {
  constructor(
    private readonly coaService: COAService
  ) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {

    const request = context.switchToHttp().getRequest();
    const { params } = request;
    const { _id } = params;

    const check: ICOAEntity = await this.coaService.findOneById<ICOAEntity>(
      _id,
      {
        join: true
      }
    );
    request.__coa = check;
    return true;
  }
}