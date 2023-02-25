import { IDatabaseCreateOptions } from "src/common/database/interfaces/database.interface";
import { EmployeeDto } from "../dtos/employee.dto";
import { EmployeeEntity } from "../repository/entities/employee.entity";


export interface IEmployeeService {

  create(
    data: EmployeeDto,
    options?: IDatabaseCreateOptions
  ): Promise<EmployeeEntity>;
}