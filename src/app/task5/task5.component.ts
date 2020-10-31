import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task5',
  templateUrl: './task5.component.html',
  styleUrls: ['./task5.component.css']
})
export class Task5Component implements OnInit {

  number;
  id;
  flag:boolean
  tab1: number=0;
  tab2: number=0;
  tab3: number=0;
  tab4: number=0;
  tab5: number=0;
  tab6: number=0;
  tab7: number=0;
  tab8: number=0;
  tab9: number=0;
  tab10: number=0;

  constructor() { }

  ngOnInit(): void {
  }
  onbuttonclick(){
    var a=this.number;
    var b;
    for (var i=1; i<=10; i++){
      b=a*i;
      document.write(""+a+"*"+i+"="+b+"<br>");
    }

  }
  onClickShowTable()
  {
   this.flag=true;
  }

   onsubmit()
   {
     this.tab1=this.id *1;
     this.tab2=this.id *2;
     this.tab3=this.id *3;
     this.tab4=this.id *4;
     this.tab5=this.id *5;
     this.tab6=this.id *6;
     this.tab7=this.id *7;
     this.tab8=this.id *8;
     this.tab9=this.id *9;
     this.tab10=this.id *10;
   }

 }



