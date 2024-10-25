import { TypeOrmModule, TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { STUDENT } from "../entity/student.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class DataBaseService implements TypeOrmOptionsFactory{ 
createTypeOrmOptions():TypeOrmModuleOptions{
return{
  type:'mssql',
  host:'localhost',
  port:1433,
  username:'Krion',
  password:'qwerty',
  database:'STUDENTDB',
  entities:[STUDENT],
  options:{trustServerCertificate:true,
    enableArithAbort: true,
  }
};
}
}


