import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare function initPlugging();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public router: Router) { }

  ngOnInit() {
    initPlugging();
  }

  ingresar() {
    this.router.navigate(['/dashboard']);
  }

}
