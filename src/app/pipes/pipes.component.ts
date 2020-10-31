import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  str:string="welcome govardhana";
  money:number=546.5454;
  number:number=4/5;
  flag:boolean = true;
  currency:number=9874;
  date:number=Date.now();
  object:object={name:"string",password:"string",address:{dno:"number",street:"string",numbers:[1,2,3,5]}};


  constructor() { }

  ngOnInit(): void {
  }
  // onbuttonclick(){
  //   this.
  // }

}
