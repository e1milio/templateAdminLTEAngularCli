import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  public titulo:string;

  constructor() {
    this.titulo = "Dashboard works!";
  }

  ngOnInit() {

  }

}
