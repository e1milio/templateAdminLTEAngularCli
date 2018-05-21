import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styles: []
})
export class MainContentComponent implements OnInit {

  public titulo:string;

  constructor() {

    this.titulo = "";

  }

  ngOnInit() {
  }

  onActivate(event: any){
    this.titulo = event.titulo;
  }

  onDeactivate(event: any){
    this.titulo = "";
  }

}