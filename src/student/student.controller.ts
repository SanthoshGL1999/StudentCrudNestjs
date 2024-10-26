import { Body, Controller, Get, Injectable, Param, Post, Put, Delete, Request } from '@nestjs/common';
import { StudentService } from './student.service';
import { STUDENT } from './entity/student.entity';

@Injectable()
@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) {}

    @Get()
    findAll(): Promise<STUDENT[]> {
        return this.studentService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<STUDENT> {
        return this.studentService.findOne(id);
    }

    @Post()
    create(@Body() student: STUDENT, @Request() req): Promise<STUDENT> {
        return this.studentService.create(student);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() student: STUDENT): Promise<STUDENT> {
        return this.studentService.update(id, student);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.studentService.remove(id);
    }
}
