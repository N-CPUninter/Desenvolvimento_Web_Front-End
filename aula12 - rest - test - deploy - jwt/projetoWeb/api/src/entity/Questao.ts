import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { EntidadeBase } from "./EntidadeBase"

@Entity()
export class Questao extends EntidadeBase{

    @Column()
    enunciado: string

    @Column()
    alternativa1: string
    @Column()
    alternativa2: string
    @Column()
    alternativa3: string
    @Column()
    alternativa4: string
    @Column()
    alternativa5: string

    @Column()
    resposta: string

}
