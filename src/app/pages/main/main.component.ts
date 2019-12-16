import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
declare var $;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: []
})
export class MainComponent implements OnInit, OnDestroy {

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    //Agrego clases al body del template adminlte
    //this.renderer.addClass(document.body, 'hold-transition');
    this.renderer.addClass(document.body, 'sidebar-mini');
  }

  ngOnDestroy() {
    //Remuevo las clases del body
    //this.renderer.removeClass(document.body, 'hold-transition');
    this.renderer.removeClass(document.body, 'sidebar-mini');
  }

}