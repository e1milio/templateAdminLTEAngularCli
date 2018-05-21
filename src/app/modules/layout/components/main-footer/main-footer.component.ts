import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-footer',
  templateUrl: './main-footer.component.html',
  styles: []
})
export class MainFooterComponent implements OnInit {

  public anio:number;

  constructor() {
    this.anio = new Date().getFullYear();
  }

  ngOnInit() {
  }

}
