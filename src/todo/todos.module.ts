import { Todos } from './todos.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Todos])],
  controllers: [TodosController],
  providers: [TodosService]
})
export class TodosModule {}
