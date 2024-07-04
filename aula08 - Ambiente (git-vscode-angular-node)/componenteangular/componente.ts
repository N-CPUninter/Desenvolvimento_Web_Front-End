import { Component } from '@angular/core';   

@Component({ 
  selector: 'app-nome-do-componente', 
  templateUrl: './nome-do-componente.component.html', 
  styleUrls: ['./nome-do-componente.component.css'] 
}) 

export class NomeDoComponenteComponent { 
  // propriedades 
  titulo = 'Meu componente';   
  // métodos 
  onClick() { 
    console.log('O botão foi clicado!'); 
  } 
} 