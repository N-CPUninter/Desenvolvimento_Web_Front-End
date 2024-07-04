import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { TESTEComponent } from './teste/teste.component';

const routes: Routes = [
  {path:"usuarios", component:UsuariosComponent},
  { path:"Usuario", component: TESTEComponent},
  { path:"Usuario/:id", component: TESTEComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
