import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoapp';
  a:number=26;
  b:number=64;
  sum:number=0;
  // str: string="welcome";
  // flag:Boolean=false;

  // onButtonClick(){
  //   alert("hello govardhan welcome to novodhi solutions");
  // }

  // onKeyUp(){
  //   alert("you pressed a key");
  // }
  onAddClick() {
    this.sum=this.a+this.b;
  }
  // c:number=26;
  // d:number=64;
  sub:number=0;
  onsubClick() {
    this.sub=this.a-this.b;
  }
  e:number=26;
  f:number=64;
  mul:number=0;
  onmulClick() {
    this.mul=this.e*this.f;
  }
  // g:number=26;
  // h:number=64;
  div:number=0;
  ondivClick() {
    this.div=this.e/this.f;
  }

}
