import { StudentService } from './student.service';
import { STUDENT } from './entity/student.entity';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    findAll(): Promise<STUDENT[]>;
    findOne(id: number): Promise<STUDENT>;
    create(student: STUDENT, req: any): Promise<STUDENT>;
    update(id: number, student: STUDENT): Promise<STUDENT>;
    remove(id: number): Promise<void>;
}
