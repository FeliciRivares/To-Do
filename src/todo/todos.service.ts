import { CreateTodoDto } from './dtos/create-todo.dto';
import { Todos } from './todos.entity';
import { TaskModel } from './tasks.model';
import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TodosService {
    constructor(@InjectRepository(Todos) private repo: Repository<Todos>){} 
    
    create(body: CreateTodoDto){
        const todo = this.repo.create(body)
        return this.repo.save(todo)
    }

    find(){
        return this.repo.find()
    }

    async findOne(id: number) {
        if(!id) return null
        return await this.repo.findOne({where: {id}})
    }

    async update(id:number, dto: CreateTodoDto) {
        let todo: any = await this.repo.findOne({where: {id}})
        todo = this.repo.merge(todo, dto) 
        if(!todo) {
            throw new NotFoundException('Task not found')
        }
        try {
            return await this.repo.save(todo);
        } catch (error) {
            throw new InternalServerErrorException('Failed to update task status');
        }
    }
    
    async delete(id : number){
        const todo = await this.repo.delete(id)
        if(!todo) {
            throw new NotFoundException('Task nor found')
        }
    }
}
