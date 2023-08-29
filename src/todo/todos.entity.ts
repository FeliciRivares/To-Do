import { Column, Entity, PrimaryGeneratedColumn,  } from 'typeorm'

@Entity()
    export class Todos {
        @PrimaryGeneratedColumn()
        id: number;
        @Column()
        description: string;
        @Column()
        todo: string;
        @Column({ default: false })
        isCompleted: boolean;
    }
