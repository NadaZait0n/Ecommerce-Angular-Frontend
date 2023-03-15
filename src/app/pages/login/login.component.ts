import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  login: any={
    email1 :'',
    password1 : '',
  }

  ngOnInit(): void {}
  // adminEmail="nada@gmail.com";
  // adminPassword="admin";
  //

  constructor(private _router: Router) {


  }

//   CheckIfUserOrAdmin() {
// if(this.login.email1=='nada@gmail.com' && this.login.password1=='admin'){
//   this._router.navigateByUrl('/product')
// }
// else {
//   this._router.navigateByUrl('/home')
// }
//   }
}


