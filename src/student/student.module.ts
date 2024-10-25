import { Injectable, Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { STUDENT } from './entity/student.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports:[TypeOrmModule.forFeature([STUDENT])],
    controllers:[StudentController],
    providers:[StudentService]
})
export class StudentModule {
}
