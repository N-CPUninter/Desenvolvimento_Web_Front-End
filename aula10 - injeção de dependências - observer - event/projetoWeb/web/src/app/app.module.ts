import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UsuarioService } from 'src/service/UsuarioService';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule} from '@angular/material/toolbar'; 
import { MatIcon, MatIconModule} from '@angular/material/icon'; 
import { MatListModule} from '@angular/material/list'; 
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { ProfessorComponent } from './componentes/professor/professor.component';
import { TESTEComponent } from './teste/teste.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsuariosComponent,
    UsuarioComponent,
    ProfessorComponent,
    TESTEComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
