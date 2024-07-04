import { Component,OnInit } from '@angular/core';
import { UsuarioService } from 'src/service/UsuarioService';
import { Router,ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { IUsuario } from 'src/inteface/IUsuario';
import { UsuarioModel } from 'src/model/UsuarioModel';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})


export class UsuariosComponent implements OnInit {  

  columns: string[] = ['id', 'Nome', 'Sobrenome'];
  dataSource!: MatTableDataSource<IUsuario>;

  ngOnInit() {
    this.bind();
  }

  constructor(private usuarioSrv: UsuarioService,
    private router: Router,
    private active: ActivatedRoute) {
  }

  async bind() {
    console.log("inicio")
    const usuarios = await this.usuarioSrv.GetAll();
    console.log ("----");
    console.log(usuarios);
    console.log ("----");
    this.dataSource = new MatTableDataSource(usuarios.data);    
  }

  async delete(usuario: UsuarioModel): Promise<void> {
    const result = await this.usuarioSrv.delete(usuario.id);
    this.bind();     
    this.router.navigateByUrl('/usuarios');      
  }

}
