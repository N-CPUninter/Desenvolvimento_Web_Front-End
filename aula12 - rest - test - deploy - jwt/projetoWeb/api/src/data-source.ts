import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Questao } from "./entity/Questao"

export const AppDataSource = new DataSource({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "postgres",
        database: "postgres",
        entities: [User, Questao],
        synchronize: true,
        logging:false
        
    })
