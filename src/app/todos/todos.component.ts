import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Todo } from './todo';
import { details} from './todo';
import { product } from './todo';
import { TaskdataService } from "./taskdata.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  id;
  title;
  name;
  status;
  user_email;
  user_name;
  flag:boolean;
  password;
  user_phonenumber;
  pro_id;
  pro_name;
  pro_price;
  pro_dec;
  pro_qty;
  pro_mfg;
  pro_img;
  arrTodos : Todo []=[ ];
  arrdetails : details []=[


  ];
  arrproduct : product []=[
  ];

  constructor( private _data:TaskdataService) {}

  ngOnInit(): void {
  this._data.getAllTasks().subscribe(
    (data:Todo[])=>{
      this.arrTodos=data;
    }
  );
  this._data.getAllproduct().subscribe(
    (data:product[])=>{
      this.arrproduct=data;
    }
  );
  this._data.getAlldetail().subscribe(
    (data:details[])=>{
      this.arrdetails=data;
    }
  );
  }
  onDeleteTask(item: Todo) {
    if (confirm('Are you sure you want to delete?')) {
      this._data.deleteTask(item.id).subscribe((x: any) => {
        if (x.affectedRows == 1) {
          this.arrTodos.splice(this.arrTodos.indexOf(item), 1);
        }
      });
    }
  }
  onEditTask(item: Todo) {
    if (item.status == 'done') {
      item.status = 'pending';
    } else {
      item.status = 'done';
    }
  }
  onTaskAdd() {
    this._data
    .addTask(new Todo(this.id, this.title, this.status))
    .subscribe((x) => {
      console.log(x);
      this.arrTodos.push(new Todo(this.id, this.title, this.status));
      this.flag = false;
    });
  }
  onDeleteEmp(item: details) {
    if (confirm('Are you sure you want to delete?')) {
      this._data.deleteDetails(item.password).subscribe((x: any) => {
          this.arrdetails.splice(this.arrdetails.indexOf(item), 1);
      });
    }
  }
  onAddEmp() {
    this._data.addDetails(new details(this.user_email, this.user_name,this.password,this.user_phonenumber))
    .subscribe((x)=>{
      console.log(x);
      this.arrdetails.push(new details(this.user_email, this.user_name,this.password,this.user_phonenumber));
    } );

  }
  onDeleteProduct(item: product) {

    if (confirm('Are you sure you want to delete?')) {
      this._data.deleteProduct(item.pro_id).subscribe((x: any) => {
          this.arrproduct.splice(this.arrproduct.indexOf(item), 1);
      });
    }
  }

  onAddProduct() {
    this._data.addProduct(new product(this.pro_id, this.pro_name, this.pro_price,this.pro_dec,this.pro_qty,this.pro_mfg,this.pro_img))
    .subscribe((x)=>{
      console.log(x);
      this.arrproduct.push(new product(this.pro_id, this.pro_name, this.pro_price,this.pro_dec,this.pro_qty,this.pro_mfg,this.pro_img));
    });
  }
}
