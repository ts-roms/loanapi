import { IDatabaseCreateOptions, IDatabaseFindAllOptions, IDatabaseFindOneOptions, IDatabaseOptions, IDatabaseSoftDeleteOptions } from "src/common/database/interfaces/database.interface";
import { COAUpdateDto } from "../dtos/accounting/coa-update.dto";
import { COADto } from "../dtos/accounting/coa.dto";
import { COAEntity } from "../repository/entities/coa.entity";
export interface ICOAService {
  create(
    data: COADto,
    options?: IDatabaseCreateOptions
  ): Promise<COAEntity>;

  findAll<T>(
    find?: Record<string, any>,
    options?: IDatabaseFindAllOptions
  ): Promise<T[]>;

  getTotal(
    find?: Record<string, any>,
    options?: IDatabaseOptions
  ): Promise<number>

  deleteOneById(
    _id: string,
    options?: IDatabaseSoftDeleteOptions
  ): Promise<COAEntity>;

  deleteOne(
    find: Record<string, any>,
    options?: IDatabaseSoftDeleteOptions
  ): Promise<COAEntity>;

  updateName(
    _id: string,
    data: COAUpdateDto,
    options?: IDatabaseOptions
  ): Promise<COAEntity>;

  findOneById<T>(_id: string, options?: IDatabaseFindOneOptions): Promise<T>;
}