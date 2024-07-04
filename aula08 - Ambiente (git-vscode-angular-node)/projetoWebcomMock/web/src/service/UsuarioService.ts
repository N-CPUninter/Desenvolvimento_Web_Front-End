import { IResultHttp } from "src/inteface/IResultHttp";
import { BaseService } from "./BaseService";
import { UsuarioModel } from "src/model/UsuarioModel";
import { HttpService } from "./HttpService";


export class UsuarioService  extends BaseService<UsuarioModel> {

    constructor('',http:HttpService,'localhost:3000/user')


}