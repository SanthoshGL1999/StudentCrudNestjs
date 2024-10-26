import { STUDENT } from './entity/student.entity';
import { Repository } from 'typeorm';
export declare class StudentService {
    private studentRepository;
    constructor(studentRepository: Repository<STUDENT>);
    findAll(): Promise<STUDENT[]>;
    findOne(ID: number): Promise<STUDENT>;
    create(student: STUDENT): Promise<STUDENT>;
    update(id: number, student: STUDENT): Promise<STUDENT>;
    remove(id: number): Promise<void>;
}
