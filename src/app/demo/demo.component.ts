import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,AbstractControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  signupform:FormGroup;
  Namesarr:string []=['welcome','thanks','good']

  ngOnInit(): void {

    this.signupform = new FormGroup({
      user_name:new FormControl(null, [Validators.required,Validators.minLength(3),this.invalidNames.bind(this)]),
      user_email:new FormControl(null,[Validators.required, Validators.email]),
      password_Group:new FormGroup({
      user_password:new FormControl(null),
      user_confirmpassword:new FormControl(null)},this.matchPassword.bind(this)),
      user_gender:new FormControl("male"),
      user_city:new FormControl("bengaluru",Validators.required),
      user_hobbies:new FormArray ([]),
      user_notification: new FormControl('email'),
      user_phone: new FormControl(null),


    });
    this.signupform.get('user_notification').valueChanges.subscribe((x)=>this.setNotificationValidation(x));
  }
  setNotificationValidation(value:string){
    const phone=this.signupform.get('user_phone');
    const email=this.signupform.get('user_email');
  if(value=='phone'){
phone.setValidators(Validators.required);
email.clearValidators();
email.setValidators(Validators.email);
  }
  else{
    email.setValidators([Validators.email,Validators.required]);
phone.clearValidators();
  }
  phone.updateValueAndValidity();
  email.updateValueAndValidity();
  }
  onsignup(){
    console.log(this.signupform);

  }
  matchPassword(control:AbstractControl):{[key:string]:boolean}{
   if(control.get('user_password').value!=control.get('user_confirmpassword').value){
     return { passwordnotmatched:true};
   }
   return null;

  }
  invalidNames(control:AbstractControl):{[key:string]:boolean}{
    if (this.Namesarr.indexOf(control.value)>=0){
      return{invalidName:true };
    }
    return null;

    

  }
  getControls(){
    return ( <FormArray> this.signupform.get('user_hobbies')).controls;

  }
  onRemoveHobbiesClick(i){
    (this.signupform.get('user_hobbies') as FormArray).removeAt(i);
  }
  onAddHobbieClick(){
    if ( this.signupform.get('user_hobbies').value.length<3){
      const control=new FormControl(null);
      (this.signupform.get('user_hobbies') as FormArray).push(control);
    }
    else{
      alert("max 3 hobbies are allowed");
    }
  }
}
