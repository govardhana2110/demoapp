import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import{product, Todo,details } from '../details';
import {UrlService } from '../url.service';
@Component({
  selector: 'app-editpro',
  templateUrl: './editpro.component.html',
  styleUrls: ['./editpro.component.css']
})

export class EditproComponent implements OnInit {
  pro_edit:FormGroup;

  proid;
  constructor( private _actroutes:ActivatedRoute,private _data:UrlService,private _router:Router) { }



  ngOnInit(): void {
    this.pro_edit=new FormGroup({
      pro_id:new FormControl(null,[Validators.required]),
      pro_name:new FormControl(null,[Validators.required]),
      pro_price:new FormControl(null,[Validators.required]),
      pro_dec:new FormControl(null,[Validators.required]),
      pro_qty:new FormControl(null,[Validators.required]),
      pro_mfg:new FormControl(null,[Validators.required]),
      pro_img:new FormControl(null,[Validators.required]),



});

this.proid=this._actroutes.snapshot.params['id'];
this._data.getProduct(this.proid).subscribe((data:product[])=>{
  this.pro_edit.patchValue({
    pro_id:data[0].pro_id,
    pro_name:data[0].pro_name,
    pro_price:data[0].pro_price,
    pro_dec:data[0].pro_dec,
    pro_qty:data[0]. pro_qty,
    pro_mfg:data[0].pro_mfg,
    pro_img:data[0].pro_img,
  });
});
  }
  proedit(){
    this._data.editproduct(this.pro_edit.value).subscribe((x)=>{
      this._router.navigate(['/database']);
    })
    }
}
