import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Questao } from "../entity/Questao"


export class QuestaoController {

    private questaoRepository = AppDataSource.getRepository(Questao)

    //recupera tudo do banco
    async all(request: Request, response: Response, next: NextFunction) {
        return this.questaoRepository.find()
    }

    // recuperando um registro
    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)


        const questao = await this.questaoRepository.findOne({
            where: { id }
        })

        if (!questao) {
            return "Não existe esta questão"
        }
        return questao
    }

    async save(request: Request, response: Response, next: NextFunction) {
        //parser
        const {  enunciado, alternativa1, alternativa2, alternativa3,
            alternativa4,alternativa5,resposta } = request.body;

        const questao = Object.assign(new Questao(), {
            enunciado, alternativa1, alternativa2, alternativa3,
            alternativa4,alternativa5,resposta
        })

        return this.questaoRepository.save(questao)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        let questaoToRemove = await this.questaoRepository.findOneBy({ id })

        if (!questaoToRemove) {
            return "questão não existe"
        }

        await this.questaoRepository.remove(questaoToRemove)

        return "usuario foi removido"
    }

}