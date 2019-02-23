import { Component, OnInit } from '@angular/core';
declare var $;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: []
})
export class MainComponent implements OnInit {

  public layout:any;

  constructor() { 
    this.layout = $('body').data('lte.layout');
  }

  ngOnInit() {

    this.layout.activate();

    $('.sidebar-menu').tree();
    
  }

}
