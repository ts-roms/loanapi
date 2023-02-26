import { applyDecorators, HttpStatus } from "@nestjs/common";
import { Doc, DocPaging } from "src/common/doc/decorators/doc.decorator";
import { COA_DEFAULT_AVAILABLE_SEARCH, COA_DEFAULT_AVAILABLE_SORT } from "../constants/accounting/accounting.constant";
import { COADocParamsGet } from "../constants/accounting/coa.constants";
import { COASerialiazation } from "../serializations/coa.serialization";

export function COACreateDoc(): MethodDecorator {
  return applyDecorators(
    Doc('charts-of-account.create', {
      auth: {
        jwtAccessToken: false,
      },
      response: {
        httpStatus: HttpStatus.CREATED
      }
    })
  )
}

export function COAListDoc(): MethodDecorator {
  return applyDecorators(
    DocPaging<COASerialiazation>('charts-of-account.list', {
      auth: {
        jwtAccessToken: true,
        permissionToken: true
      },
      request: {
        queries: [],
      },
      response: {
        serialization: COASerialiazation,
        _availableSort: COA_DEFAULT_AVAILABLE_SORT,
        _availableSearch: COA_DEFAULT_AVAILABLE_SEARCH
      }
    })
  )
}


export function COADeleteDoc(): MethodDecorator {
  return applyDecorators(
    Doc<void>('charts-of-account.delete', {
      auth: {
        jwtAccessToken: true,
        permissionToken: true,
      },
      request: {
        params: COADocParamsGet,
      },
    })
  );
}