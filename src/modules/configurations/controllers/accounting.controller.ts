import { Body, Controller, InternalServerErrorException, Post } from "@nestjs/common";
import { Delete, Get } from "@nestjs/common/decorators";
import { ApiTags } from "@nestjs/swagger";
import { ENUM_AUTH_PERMISSIONS } from "src/common/auth/constants/auth.enum.permission.constant";
import { AuthJwtAdminAccessProtected } from "src/common/auth/decorators/auth.jwt.decorator";
import { AuthPermissionProtected } from "src/common/auth/decorators/auth.permission.decorator";
import { ENUM_ERROR_STATUS_CODE_ERROR } from "src/common/error/constants/error.status-code.constant";
import { PaginationQuery } from "src/common/pagination/decorators/pagination.decorator";
import { PaginationListDto } from "src/common/pagination/dtos/pagination.list.dto";
import { PaginationService } from "src/common/pagination/services/pagination.service";
import { RequestParamGuard } from "src/common/request/decorators/request.decorator";
import { Response, ResponsePaging } from "src/common/response/decorators/response.decorator";
import { IResponsePaging } from "src/common/response/interfaces/response.interface";
import { COA_DEFAULT_AVAILABLE_SEARCH, COA_DEFAULT_AVAILABLE_SORT, COA_DEFAULT_PER_PAGE, COA_DEFAULT_SORT } from "../constants/accounting/accounting.constant";
import { COADeleteGuard, GetCOA } from "../decorators/coa.decorators";
import { COACreateDoc, COADeleteDoc, COAListDoc } from "../docs/coa.docs";
import { COARequestDto } from "../dtos/accounting/coa-request.dto";
import { COADto } from "../dtos/accounting/coa.dto";
import { ICOAEntity } from "../interfaces/coa.interface";
import { COAEntity } from "../repository/entities/coa.entity";
import { COASerialiazation } from "../serializations/coa.serialization";
import { COAService } from "../services/coa.service";


@ApiTags('module.configuration.accounting')
@Controller({
  version: '1',
  path: '/accounting'
})
export class AccountingController {

  constructor(
    private readonly cOAService: COAService,
    private readonly paginationService: PaginationService
  ) {
  }

  @COACreateDoc()
  @Response('charts-of-account.create')
  @Post('/charts-of-account/create')
  async create(
    @Body() { ...body }: COADto
  ): Promise<COAEntity> {
    try {
      return this.cOAService.create(body)
    } catch (error) {
      throw new InternalServerErrorException({
        statusCode: ENUM_ERROR_STATUS_CODE_ERROR.ERROR_UNKNOWN,
        message: 'http.serverError.internalServerError',
        _error: error.message,
      });
    }
  }

  @COAListDoc()
  @ResponsePaging('charts-of-account.list', {
    serialization: COASerialiazation
  })
  @Get('/charts-of-account/list')
  async list(
    @PaginationQuery(
      COA_DEFAULT_PER_PAGE,
      COA_DEFAULT_AVAILABLE_SEARCH,
      COA_DEFAULT_SORT,
      COA_DEFAULT_AVAILABLE_SORT,
    )
    {
      page,
      perPage,
      _sort,
      _search,
      _offset,
      _availableSort,
      _availableSearch
    }: PaginationListDto
  ): Promise<IResponsePaging> {
    const find: Record<string, any> = {
      ..._search
    }
    const coa: COAEntity[] = await this.cOAService.findAll(find, {
      paging: {
        limit: perPage,
        offset: _offset
      },
      sort: _sort
    });

    const totalData: number = await this.cOAService.getTotal(find);
    const totalPage: number = this.paginationService.totalPage(
      totalData,
      perPage
    );

    return {
      totalData,
      totalPage,
      currentPage: page,
      _availableSearch,
      _availableSort,
      data: coa
    }
  }

  @COADeleteDoc()
  @Response('charts-of-account.delete')
  @COADeleteGuard()
  @RequestParamGuard(COARequestDto)
  @AuthPermissionProtected(
    ENUM_AUTH_PERMISSIONS.USER_READ,
    ENUM_AUTH_PERMISSIONS.USER_DELETE
  )
  @AuthJwtAdminAccessProtected()
  @Delete('/charts-of-account/delete/:coa')
  async delete(
    @GetCOA() coa: ICOAEntity
  ): Promise<void> {
    try {
    this.cOAService.deleteOneById(coa._id)
    } catch (error) {
      throw new InternalServerErrorException({
        statusCode: ENUM_ERROR_STATUS_CODE_ERROR.ERROR_UNKNOWN,
        message: 'http.serverError.internalServerError',
        _error: error.message,
      });
    }
    return;
  }
}