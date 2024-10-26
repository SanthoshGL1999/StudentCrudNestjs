import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { DataBaseService } from './student/Config/studentDB.config';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports:[StudentModule,
    TypeOrmModule.forRootAsync({useClass:DataBaseService}),
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
