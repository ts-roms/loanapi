import { Injectable } from "@nestjs/common/decorators";
import { IDatabaseCreateOptions } from "src/common/database/interfaces/database.interface";
import { EmployeeDto } from "../dtos/employee.dto";
import { IEmployeeService } from "../interfaces/employee-service.interface";
import { ContactDetailsEntity } from "../repository/entities/contact-details.entity";
import { EmployeeEntity } from "../repository/entities/employee.entity";
import { EmploymentEntity } from "../repository/entities/employment.entity";
import { ContactDetailsRepository } from "../repository/repositories/contact-details.repository";
import { EmployeeRepository } from "../repository/repositories/employee.repository";
import { EmploymentRepository } from "../repository/repositories/employment.repository";


@Injectable()
export class EmployeeService implements IEmployeeService {

  /**
   *
   */
  constructor(
    private readonly employeeRepository: EmployeeRepository,
    private readonly contactDetailsRepository: ContactDetailsRepository,
    private readonly employmentRepository: EmploymentRepository
  ) {
    
  }

  async create(
    { ...dto }: EmployeeDto,
    options?: IDatabaseCreateOptions
  ): Promise<EmployeeEntity> {

    const employee: EmployeeEntity = new EmployeeEntity();
    employee.salutation = dto.salutation;
    employee.firstName = dto.firstName;
    employee.middleName = dto.middleName;
    employee.lastName = dto.lastName;
    employee.gender = dto.gender;
    employee.birthdate = dto.birthdate;
    employee.active = true;
    employee.blocked = false;
    const newEmployee = await this.employeeRepository.create<EmployeeEntity>(employee, options);

    const contactDetails: ContactDetailsEntity = new ContactDetailsEntity();
    
    contactDetails.userId = newEmployee._id;
    contactDetails.contactNumber = dto.contactDetails.contactNumber;
    contactDetails.emailAddress = dto.contactDetails.emailAddress;
    contactDetails.street = dto.contactDetails.street;
    contactDetails.city = dto.contactDetails.city;
    contactDetails.province = dto.contactDetails.province;
    contactDetails.state = dto.contactDetails.state;
    contactDetails.country = dto.contactDetails.country;
    contactDetails.postalCode = dto.contactDetails.postalCode;
    this.contactDetailsRepository.create<ContactDetailsEntity>(contactDetails, options)

    const employmentDetails: EmploymentEntity = new EmploymentEntity();
    employmentDetails.userId = newEmployee._id;
    employmentDetails.joiningDate = dto.employmentDetails.joiningDate;
    employmentDetails.branchId = dto.employmentDetails.branchId;
    employmentDetails.loanOfficerId = dto.employmentDetails.loanOfficerId;
    employmentDetails.salaryRange = dto.employmentDetails.salaryRange;
    employmentDetails.description = dto.employmentDetails.description;

    this.employmentRepository.create<EmploymentEntity>(employmentDetails, options);

    return {
      ...newEmployee,
      contactDetails,
      employmentDetails
    };
  }

}