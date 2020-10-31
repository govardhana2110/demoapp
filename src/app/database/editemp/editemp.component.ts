import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import{product, Todo,details } from '../details';
import {UrlService } from '../url.service';
@Component({
  selector: 'app-editemp',
  templateUrl: './editemp.component.html',
  styleUrls: ['./editemp.component.css']
})


export class EditempComponent implements OnInit {
  emp_edit:FormGroup;
  empid;
  constructor( private _actroutes:ActivatedRoute,private _data:UrlService,private _router:Router) { }

  ngOnInit(): void {
    this.emp_edit=new FormGroup({
      user_email:new FormControl(null,[Validators.required,Validators.email]),
      user_name:new FormControl(null,[Validators.required]),
      password:new FormControl(null,[Validators.required]),
      user_phonenumber:new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    });
    this.empid=this._actroutes.snapshot.params['id'];
this._data.getDetails(this.empid).subscribe((data:details[])=>{
  this.emp_edit.patchValue({
    user_email:data[0].user_email,
    user_name:data[0]. user_name,
    password:data[0].password,
    user_phonenumber:data[0].user_phonenumber,

  });
});

  }
  empedit(){
    this._data.editdetail(this.emp_edit.value).subscribe((x)=>{
      this._router.navigate(['/database']);
    })
    }

}
