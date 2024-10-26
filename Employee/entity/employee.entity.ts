import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Employee{

    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    NAME: String;

    @Column()
    AGE: number;

    @Column()
    DEPARTMENT: String;

    @Column()
    DATE_OF_JOINING: number;
}