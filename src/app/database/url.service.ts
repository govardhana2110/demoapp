import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Todo,details,product} from './details'
@Injectable({
  providedIn: 'root'
})
export class UrlService {
  url:string = 'http://localhost:3000/tasks/';
  url1:string = 'http://localhost:3000/products/';
  url2:string = 'http://localhost:3000/details/';

  constructor(private _http:HttpClient) { }
  getAllTasks(){
    return this._http.get<Todo[]>(this.url);
    }
  getTask(id){
      return this._http.get<Todo[]>(this.url+id);
      }
      getDetails(id){
        return this._http.get<details[]>(this.url2+id);
        }
        getProduct(id){
          return this._http.get<product[]>(this.url1+id);
          }
  addtask(item:Todo){
let body=JSON.stringify(item);
let head=new HttpHeaders().set('Content-Type','application/json');
return this._http.post(this.url,body,{headers:head});
  }
  deletetask(Id){
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this,this._http.delete(this.url+Id,{headers:head});
  }
  editTask(item: Todo) {
    let head = new HttpHeaders().set('Content-Type', 'application/json');
    let body = JSON.stringify(item);
    return this._http.put(this.url + item.id, body, { headers: head });
  }
  editproduct(item: product) {
    let head = new HttpHeaders().set('Content-Type', 'application/json');
    let body = JSON.stringify(item);
    return this._http.put(this.url1 + item.pro_id, body, { headers: head });
  }
  editdetail(item: details) {
    let head = new HttpHeaders().set('Content-Type', 'application/json');
    let body = JSON.stringify(item);
    return this._http.put(this.url2 + item.password, body, { headers: head });
  }
  getAllemployee(){
    return this._http.get<details[]>(this.url2);
    }
  addDetails(item:details){
let body=JSON.stringify(item);
let head=new HttpHeaders().set('Content-Type','application/json');
return this._http.post(this.url2,body,{headers:head});
  }
  deleteDetails(Id){
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url2+Id,{headers:head});
  }
  getAllproducts(){
    return this._http.get<product[]>(this.url1);
    }
  addProduct(item:product){
let body=JSON.stringify(item);
let head=new HttpHeaders().set('Content-Type','application/json');
return this._http.post(this.url1,body,{headers:head});
  }
  deleteProduct(Id){
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this,this._http.delete(this.url1+Id,{headers:head});
  }
}
