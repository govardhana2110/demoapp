import { Component, OnInit } from '@angular/core';
import { login } from "./login";
import { register } from "./login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email;
  password;
  firstname;
  lastname;
  showpassword;
  entermail;
  flag:boolean=false;


  constructor() { }

  ngOnInit(): void {
  }
  onloginclick(){
    alert("successfully loged in");
  }
  onregisterclick(){
    this.flag=true;

  }
  login(f) {
    console.log(f);
  }
}
