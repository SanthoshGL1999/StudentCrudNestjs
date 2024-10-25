import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { STUDENT } from './entity/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(STUDENT)
        private studentRepository:Repository<STUDENT>,
    ){}
    findAll(): Promise<STUDENT[]>{
        return this.studentRepository.find();
    }
    create(student: STUDENT): Promise<STUDENT>{
        return this.studentRepository.save(student);
    }
}
