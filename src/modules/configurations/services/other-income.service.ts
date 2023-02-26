import { Injectable } from '@nestjs/common';
import { IDatabaseCreateOptions } from 'src/common/database/interfaces/database.interface';
import { OtherIncomeConfigDto } from '../dtos/other-income.dto';
import { IOtherIncomeConfigService } from "../interfaces/other-income.interface";
import { OtherIncomeConfigEntity } from '../repository/entities/other-income.entity';
import { OtherIncomeConfigRepository } from '../repository/repositories/other-income.repository';

@Injectable()
export class OtherIncomeConfigService implements IOtherIncomeConfigService {
  /**
   *
   */
  constructor(
    private readonly otherIncomeConfigRepository: OtherIncomeConfigRepository
  ) {

  }

  create(
    { ...dto }: OtherIncomeConfigDto,
    options?: IDatabaseCreateOptions
  ): Promise<OtherIncomeConfigEntity> {
    const otherIncome: OtherIncomeConfigEntity = new OtherIncomeConfigEntity();
    otherIncome.name = dto.name,
    otherIncome.accountId = dto.accountId
    return this.otherIncomeConfigRepository.create<OtherIncomeConfigDto>(otherIncome, options);
  }
}
