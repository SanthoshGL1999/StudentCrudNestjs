import { Entity,Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class STUDENT{
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    ROLLNO: number;

    @Column()
    NAME: String;

    @Column()
    AGE: number;

    @Column()
    COURSE: String;

    @Column()
    EMAIL_ID: String;
}