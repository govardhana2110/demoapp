import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {HttpClient,HttpHeaders } from "@angular/common/http";
import { Todo,details,product } from './todo'
@Injectable({
  providedIn: 'root'
})
export class TaskdataService {

url:string = 'http://localhost:3000/tasks/';
url1:string = 'http://localhost:3000/products/';
url2:string = 'http://localhost:3000/details/';

  constructor(private _http:HttpClient) { }
  getAllTasks(){
  return this._http.get(this.url);
  }
  addTask(item: Todo) {
    let head = new HttpHeaders().set('Content-Type', 'application/json');
    let body = JSON.stringify(item);
    return this._http.post(this.url, body, { headers: head });
  }
  deleteTask(id) {
    let head = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete(this.url + id, { headers: head });
  }
  editTask(item: Todo) {
    let head = new HttpHeaders().set('Content-Type', 'application/json');
    let body = JSON.stringify(item);
    return this._http.put(this.url + item.id, body, { headers: head });
  }
  getAllproduct(){
    return this._http.get(this.url1);
    }
    addProduct(item: product) {
      let head = new HttpHeaders().set('Content-Type', 'application/json');
      let body = JSON.stringify(item);
      return this._http.post(this.url1, body, { headers: head });
    }
    deleteProduct(id) {
      let head = new HttpHeaders().set('Content-Type', 'application/json');
      return this._http.delete(this.url1 + id, { headers: head });
    }
    // editProduct(item: product) {
    //   let head = new HttpHeaders().set('Content-Type', 'application/json');
    //   let body = JSON.stringify(item);
    //   return this._http.put(this.url + item.pro_id, body, { headers: head });
    // }
    getAlldetail(){
      return this._http.get(this.url2);
      }
      addDetails(item: details) {
        let head = new HttpHeaders().set('Content-Type', 'application/json');
        let body = JSON.stringify(item);
        return this._http.post(this.url2, body, { headers: head });
      }
      deleteDetails(id) {
        let head = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url2 + id, { headers: head });
      }
      // editdetail(item: details) {
      //   let head = new HttpHeaders().set('Content-Type', 'application/json');
      //   let body = JSON.stringify(item);
      //   return this._http.put(this.url + item.user_name, body, { headers: head });
      // }
}
