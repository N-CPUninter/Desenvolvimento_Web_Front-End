import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class EntidadeBase {

    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn({type: "timestamp"})
    dataCriacao: Date

    @UpdateDateColumn({type: "timestamp"})
    dataAlteracao: Date

}