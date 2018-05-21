import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styles: []
})
export class EjemploComponent implements OnInit {

  public titulo:string;

  constructor() {
    this.titulo = "Ejemplo works!";
  }

  ngOnInit() {

  }

}
