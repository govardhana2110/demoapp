export class Todo {
  constructor(public id:number, public title:string, public status:string ){}
}
export class details {
  constructor(public user_email:string, public user_name:number, public password:string,public user_phonenumber:string ){}
}
export class product {
  constructor(public pro_id:string, public pro_name:string, public pro_price:string ,public pro_dec:number,public pro_qty:number, public pro_mfg:string,public pro_img:string){}
}
