import { CreateTodoDto } from './dtos/create-todo.dto';
import { TaskModel } from './tasks.model';
import { TodosService } from './todos.service';
import { Body, Controller, Delete, Get, NotFoundException, NotImplementedException, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('todos')
export class TodosController {

    constructor(private todosService: TodosService) {}
    @Post()
    createTask(@Body() body: CreateTodoDto){
        return this.todosService.create(body)
    }
    @Get()
    getAllTask(){
        return this.todosService.find()
    }
    @Get('/:id')
    getTaskById(@Param('id') id: string){
       return this.todosService.findOne(parseInt(id))
    }
    @Patch('/:id')
    updateTaskStatus(
        @Param('id') id: string,
        @Body() dto: CreateTodoDto
        ){
        return this.todosService.update(parseInt(id), dto)
    }
    @Delete('/:id')
    deleteTask (@Param('id') id:string) {
        return this.todosService.delete(parseInt(id))
    }
}

