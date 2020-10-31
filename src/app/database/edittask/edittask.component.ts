import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import{product, Todo,details } from '../details';
import {UrlService } from '../url.service';

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EdittaskComponent implements OnInit {
  task_edit:FormGroup;

  status_arr:string[]=['Done','Pending'];
  taskid;

  constructor( private _actroutes:ActivatedRoute,private _data:UrlService,private _router:Router) { }


  ngOnInit(): void {
   this.task_edit=new FormGroup({
     id:new FormControl(),
     title:new FormControl(),
     status:new FormControl(),
   });



   this.taskid=this._actroutes.snapshot.params['id'];
this._data.getTask(this.taskid).subscribe((data:Todo[])=>{
  this.task_edit.patchValue({
    id:data[0].id,
    title:data[0].title,
    status:data[0].status,
  });
});


  }

oneditclick(){
this._data.editTask(this.task_edit.value).subscribe((x)=>{
  this._router.navigate(['/database']);
})
}


}
