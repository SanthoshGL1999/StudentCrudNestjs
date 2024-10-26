import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { STUDENT } from './entity/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(STUDENT)
        private studentRepository: Repository<STUDENT>,
    ) {}

    async findAll(): Promise<STUDENT[]> {
        return this.studentRepository.find();
    }

    async findOne(ID: number): Promise<STUDENT> {
        const student = await this.studentRepository.findOne({ where: { ID } });
        if (!student) {
            throw new NotFoundException(`Student with ID ${ID} not found`);
        }
        return student;
    }

    async create(student: STUDENT): Promise<STUDENT> {
        return this.studentRepository.save(student);
    }

    async update(id: number, student: STUDENT): Promise<STUDENT> {
        const existingStudent = await this.findOne(id); // Check if student exists
        if (!existingStudent) {
            throw new NotFoundException(`Student with ID ${id} not found`);
        }

        // Update the student properties
        Object.assign(existingStudent, student);
        return this.studentRepository.save(existingStudent);
    }

    async remove(id: number): Promise<void> {
        const result = await this.studentRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`Student with ID ${id} not found`);
        }
    }
}
