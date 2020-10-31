import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {Product,Cart} from"./product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  selectedCategory: string = '';
  productsarr: Product[] = [
    new Product('xr', 70000), 
    new Product('11pro', 100000),
    new Product('food', 100)];
  cartarr:Cart[]=[

  ]
  pname:string;
  pcost:number;
  constructor() { }

  ngOnInit(): void {
  }
  onMyEvent(val) {
    console.log(val, 'from parent');
    this.productsarr = this.productsarr.filter((x) => x.pname.startsWith(val));
  }
  onaddclick(){
    this.cartarr.push(new Cart(this.pname, this.pcost));

  }
}
