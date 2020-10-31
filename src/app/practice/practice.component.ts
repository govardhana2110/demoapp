import { Component, OnInit } from '@angular/core';
import { Todo, Employee,Table} from "./practice";
@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  id;
  status;
  title;
  flag :boolean = false;
  flag1 :boolean = false;
  eid;
  ename;
  eage;
  estatus;
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

    arrTodos: Todo[]=
      [
        new Todo (1, 'Email to manager ','pending'),
        new Todo (2,'Solve todays task','done'),
      ];

    arremployee: Employee[]=[
        new Employee(1, 'Sushil Singh','28','manager'),
        new Employee(2, 'Santosh Lokare', '22','software developer'),
        //new Employee(3, 'Sanjiv Reddy', '25', 'software developer'),
         ];
    constructor() { }

    ngOnInit(): void {
    }

  //delete the item form task table
  onDelete (item: Todo)
  {
    this.arrTodos.splice(this.arrTodos.indexOf(item),1);
  }
  //Edit the item form task table
  onEdit(item: Todo)
  {
   if(item.status=='done')
   {
     item.status='pending';
   }
   else
   {
     item.status='done';
   }
  }

   //This method is for on click button table will be show
   onClickShowTable()
   {
    this.flag= !this.flag;
   }



  //Edit the status form employee table
  onEditEmployeeStatus(item: Employee)
  {
    if(item.estatus=='manager')
    {
      item.estatus='software developer';
    }
    else
    {
      item.estatus='manager';
    }
  }


  //Edit the Age of employee from table
  onEditEmployeeAge(item : Employee)
   {
    item.eage= prompt("Enter the employee age:");
    if(item.eage==null )
      {
       item.eage= "0";
      }
    else
      {
      item.eage;
      }
    }

  //delete the item of employee from the table
  onDeleteEmployee(item: Employee)
   {
     this.arremployee.splice(this.arremployee.indexOf(item),1);
   }

    //This method for adding employee details on component


    onCancelClick()
    {
      this.flag=false;
    }

    onCancelClick1()
    {
      this.flag1=false;
    }

    //This method is for on click button table will be show
   onClickShowTable1()
   {
    this.flag1= !this.flag1;
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
