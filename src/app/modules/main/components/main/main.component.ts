import { Component, OnInit } from '@angular/core';
declare var $;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: []
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('.sidebar-menu').tree();
    
  }

}
