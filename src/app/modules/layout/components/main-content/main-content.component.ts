import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styles: []
})
export class MainContentComponent implements OnInit {

  public titulo:string;

  constructor(private _router: Router) {

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