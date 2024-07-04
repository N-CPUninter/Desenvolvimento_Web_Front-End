import { IResultHttp } from "src/inteface/IResultHttp";
import { BaseService } from "./BaseService";
import { environment } from 'src/environments/environment';
import { HttpService } from './HttpService';


export class FuncionarioService extends BaseService<FuncionarioModel>{
  
    public GetByCpf(id: string): Promise<IResultHttp> {
      
  }

}