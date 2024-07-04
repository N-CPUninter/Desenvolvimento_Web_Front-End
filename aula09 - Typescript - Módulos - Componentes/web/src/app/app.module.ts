import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MundoComponent } from './mundo/mundo.component';
import { OlaComponent } from './ola/ola.component';

@NgModule({
  declarations: [
    AppComponent,    
    MundoComponent, OlaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
