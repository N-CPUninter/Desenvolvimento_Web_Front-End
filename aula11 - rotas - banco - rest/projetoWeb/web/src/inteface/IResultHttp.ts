// vamos definir uma interface para 
// as transações http
//IResultHttp vai transitar nas chamadas
export interface IResultHttp {
    sucesso:boolean //deu certo ou não
    erro:any  //caso ocorra terá um erro
    data:any //dados de retorno
}
