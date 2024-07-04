import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { EntidadeBase } from "./EntidadeBase"

@Entity()
export class User extends EntidadeBase{
   
    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

}
