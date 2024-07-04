import { Component, OnInit } from '@angular/core';
import data from '../assets/data.json';
import { UsuarioService } from 'src/service/UsuarioService';
import { HttpService } from 'src/service/HttpService';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{ 
   
  
  users:any

  constructor(private usuarioSrv: UsuarioService) {
   
  }

  ngOnInit(): void {
   // this.bind() 
    //this.users = data.usuarios   
  }     
    
  async bind(){     
   //const usuarios = await this.usuarioSrv.GetAll();   
   //console.log (usuarios)
   // this.users = usuarios.data
  }


  

}
 