import { Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { Employee } from './entity/employee.entity';

@Module({
  imports:[Employee],
  controllers: [EmployeeController],
  providers: [EmployeeService]
})
export class EmployeeModule {}
