import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MeuModulo } from './meu-modulo.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MeuModulo
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

