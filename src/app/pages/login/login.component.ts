import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit, OnDestroy {

  public username:string;

  constructor(
    private renderer: Renderer2,
    private _router: Router
  ) {
    this.username = 'emilio';
   }

  ngOnInit() {
    //Agrego clases al body del template adminlte
    //this.renderer.addClass(document.body, 'hold-transition');
    this.renderer.addClass(document.body, 'login-page');

    localStorage.removeItem('username');
    localStorage.clear();
  }

  ngOnDestroy() {
    //Remuevo las clases del login
    //this.renderer.removeClass(document.body, 'hold-transition');
    this.renderer.removeClass(document.body, 'login-page');
  }

  login(){
    console.log("this.username: " + this.username);
    localStorage.setItem('username',this.username);
    console.log("localStorage username: " + localStorage.getItem('username'));
    this._router.navigate(['/dashboard/dashboard']);
  }

}