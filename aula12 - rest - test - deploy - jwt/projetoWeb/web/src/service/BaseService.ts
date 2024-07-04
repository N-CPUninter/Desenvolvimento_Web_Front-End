import { environment } from 'src/environments/environment';
import { HttpService } from './HttpService';
import { IResultHttp } from 'src/inteface/IResultHttp'; 
import { Injectable } from '@angular/core';
// tipo genérico
export  class BaseService<T> {

  urlBase: string = '';

  constructor(public url: string, public http: HttpService) {
    this.urlBase = 'http://localhost:3000/users' //`${environment.url_api}/${this.url}`;
  }


  public GetAll(): Promise<IResultHttp> {
    console.log (this.urlBase)    
    return  this.http.get(this.urlBase); // url do rest    
  }

  public GetById(id: string): Promise<IResultHttp> {
    return this.http.get(`${this.urlBase}/${id}`);
  }

  public post(model: T): Promise<IResultHttp> {
    return this.http.post(this.urlBase, model);
  }

  public delete(id: string|undefined): Promise<IResultHttp> {    
    return this.http.delete(`${this.urlBase}/${id}`);
  }

}