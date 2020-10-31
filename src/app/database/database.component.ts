import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { employee } from '../newdemo/group';
import { Todo,details,product} from './details'
import { UrlService} from './url.service'
@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {
  Todo_arr:Todo[]=[];
  Details_arr:details[]=[];
  Pro_arr:product[]=[];
  constructor(private _data:UrlService ,private _router:Router) { }

  ngOnInit(): void {
    this._data.getAllTasks().subscribe((data)=>{
    this.Todo_arr=data
    });
    this._data.getAllemployee().subscribe((emp)=>{
      this.Details_arr=emp
    });
    this._data.getAllproducts().subscribe((pro)=>{
      this.Pro_arr=pro;
    });

  }
  editclick(item:Todo){
this._router.navigate(['/edittask',item.id]);
  }
  editemp(item:details){
    this._router.navigate(['/editemp',item.password]);
      }
      editpro(item:product){
        this._router.navigate(['/editpro',item.pro_id]);
          }
  ondeleteclick(item:Todo){
    if (confirm('Are you sure you want to delete?')) {
    this._data.deletetask(item.id).subscribe((x:any)=>{
this.Todo_arr.splice(this.Todo_arr.indexOf(item),1);
    });
  }

  }
  ondeleteemployee(item:details){
    if (confirm('Are you sure you want to delete?')) {
    this._data.deleteDetails(item.password).subscribe((x:any)=>{
this.Details_arr.splice(this.Details_arr.indexOf(item),1);
    });
  }

  }
  ondeleteproduct(item:product){
    if (confirm('Are you sure you want to delete?')) {
    this._data.deleteProduct(item.pro_id).subscribe((x:any)=>{
this.Pro_arr.splice(this.Pro_arr.indexOf(item),1);
    });
  }

  }

}
