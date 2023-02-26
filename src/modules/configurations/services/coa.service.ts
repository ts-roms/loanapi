import { Injectable } from "@nestjs/common";
import { IDatabaseCreateOptions, IDatabaseFindAllOptions, IDatabaseFindOneOptions, IDatabaseOptions, IDatabaseSoftDeleteOptions } from "src/common/database/interfaces/database.interface";
import { COAUpdateDto } from "../dtos/accounting/coa-update.dto";
import { COADto } from "../dtos/accounting/coa.dto";
import { ICOAService } from "../interfaces/coa.service.interface";
import { COAEntity } from "../repository/entities/coa.entity";
import { COARepository } from "../repository/repositories/coa.repository";

@Injectable()
export class COAService implements ICOAService {


  /**
   *
   */
  constructor(
    private readonly coaRepository: COARepository
  ) {

  }

  async create(
    { ...dto }: COADto, 
    options?: IDatabaseCreateOptions
    ): Promise<COAEntity> {

      const coa: COAEntity = new COAEntity();
      coa.name = dto.name;
      coa.code = dto.code;
      coa.type = dto.type;
      coa.note = dto.note;
      return this.coaRepository.create<COAEntity>(coa, options);
  }


  async findAll<T>(
    find?: Record<string, any>,
    options?: IDatabaseFindAllOptions
  ): Promise<T[]> {
    return this.coaRepository.findAll<T>(find, options);
  }

  async getTotal(
    find?: Record<string, any>,
    options?: IDatabaseOptions
  ): Promise<number> {
    return this.coaRepository.getTotal(find, options);
  }

  async deleteOneById(
    _id: string,
    options?: IDatabaseSoftDeleteOptions
  ): Promise<COAEntity> {
    return this.coaRepository.softDeleteOneById(_id, options);
  }

  async deleteOne(
    find: Record<string, any>,
    options?: IDatabaseSoftDeleteOptions
  ): Promise<COAEntity> {
    return this.coaRepository.softDeleteOne(find, options);
  }

  async updateName(
    _id: string,
    data: COAUpdateDto,
    options?: IDatabaseOptions
  ): Promise<COAEntity> {
    return this.coaRepository.updateOneById<COAUpdateDto>(
      _id,
      data,
      options
    );
  }

  async findOneById<T>(
    _id: string,
    options?: IDatabaseFindOneOptions
  ): Promise<T> {
    return this.coaRepository.findOneById<T>(_id, options);
  }


}