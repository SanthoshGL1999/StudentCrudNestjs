import { Entity,Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class STUDENT{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    rollno: number;

    @Column()
    Name: String;

    @Column()
    Age: number;

    @Column()
    Course: String;

    @Column()
    Emailid: String;
}