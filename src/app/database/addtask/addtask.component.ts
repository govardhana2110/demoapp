import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {UrlService } from '../url.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
task:FormGroup;
employee:FormGroup;
product:FormGroup;
flag:boolean=true;
flag1:boolean=false;
flag2:boolean=false;
  constructor(private _data:UrlService,private _router:Router) { }

  ngOnInit(): void {
    this.task=new FormGroup({

      id:new FormControl(null,[Validators.required]),
      title:new FormControl(null,[Validators.required,Validators.minLength(8)]),
      status:new FormControl(null,[Validators.required]),
    });
    this.employee=new FormGroup({
      user_email:new FormControl(null,[Validators.required,Validators.email]),
      user_name:new FormControl(null,[Validators.required]),
      password:new FormControl(null,[Validators.required]),
      user_phonenumber:new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    });
    this.product=new FormGroup({
          pro_id:new FormControl(null,[Validators.required]),
          pro_name:new FormControl(null,[Validators.required]),
          pro_price:new FormControl(null,[Validators.required]),
          pro_dec:new FormControl(null,[Validators.required]),
          pro_qty:new FormControl(null,[Validators.required]),
          pro_mfg:new FormControl(null,[Validators.required]),
          pro_img:new FormControl(null,[Validators.required]),



    });
  }
onaddclick(){
this._data.addtask(this.task.value).subscribe((x)=>{
  alert('Record Added')
  this._router.navigate(['/database'])
});

}
addemployee(){
  this._data.addDetails(this.employee.value).subscribe((y)=>{
    alert('Record Added')
    this._router.navigate(['/database'])
  });

  }
  addproduct(){
    this._data.addProduct(this.product.value).subscribe((z)=>{
      alert('Record Added')
      this._router.navigate(['/database'])
    });

    }
nextclick(){
  this.flag=false;
  this.flag1=true;
  this.flag2=false;
}
backclick(){
  this.flag=true;
  this.flag1=false;
  this.flag2=false;
}

proeedclick(){
  this.flag=false;
  this.flag1=false;
  this.flag2=true;
}
previousclick(){
  this.flag=false;
  this.flag1=true;
  this.flag2=false;
}

}
