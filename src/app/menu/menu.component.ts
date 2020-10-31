import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() categoryName: string = '';
  @Output() myEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onSearchClick(val: string) {
    console.log(val, 'it is from child component');
    this.myEvent.emit(val);
  }

}
