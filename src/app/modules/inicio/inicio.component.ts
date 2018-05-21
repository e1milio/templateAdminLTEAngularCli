import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: []
})
export class InicioComponent implements OnInit {

  public titulo:string;

  constructor() {
    this.titulo = "Inicio works!";
  }

  ngOnInit() {

  }

}
