import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/service/UsuarioService';
import { UsuarioModel } from 'src/model/UsuarioModel';
import { Router, ActivatedRoute } from '@angular/router';
import { MatFormFieldModule} from '@angular/material/form-field';
import { IUsuario } from 'src/inteface/IUsuario';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent  implements OnInit {

  model: UsuarioModel = new UsuarioModel();

  constructor(
    private userSrv: UsuarioService,
    private router: Router,
    private active: ActivatedRoute
  ) { }

  ngOnInit() {
    this.active.params.subscribe(p => this.getId(p['id']));
  }

  async getId(id: string): Promise<void> {
    if (id === 'new') { return; }
    const result = await this.userSrv.GetById(id);
    this.model = result.data as UsuarioModel;
  }

  async save(): Promise<void> {
    const result = await this.userSrv.post(this.model);
    if (result.sucesso) {
      this.router.navigateByUrl('/usuarios');
    }
  }
}
