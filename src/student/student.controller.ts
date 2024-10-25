import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import { STUDENT } from './entity/student.entity';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService:StudentService){}
}
