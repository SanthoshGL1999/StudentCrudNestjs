import { STUDENT } from './entity/student.entity';
import { Repository } from 'typeorm';
export declare class StudentService {
    private studentRepository;
    constructor(studentRepository: Repository<STUDENT>);
    findAll(): Promise<STUDENT[]>;
    create(student: STUDENT): Promise<STUDENT>;
}
