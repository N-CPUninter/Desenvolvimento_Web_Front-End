import { Component, OnInit } from '@angular/core';
import data from '../assets/data.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'aulamock';
  users = data.usuarios

  public ngOnInit(): void {
    
  }
  
}
 