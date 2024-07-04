import { IResultHttp } from "src/inteface/IResultHttp";
import { BaseService } from "./BaseService";
import { UsuarioModel } from "src/model/UsuarioModel";
import { HttpService } from "./HttpService";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  
export class UsuarioService  extends BaseService<UsuarioModel> {

  

    constructor(public override http: HttpService) {
        super('users', http);
      }
      


}