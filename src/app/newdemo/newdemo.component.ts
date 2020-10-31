import { Component, OnInit } from '@angular/core';
import { HueGroup ,Light,employee,Item} from './group';


@Component({
  selector: 'app-newdemo',
  templateUrl: './newdemo.component.html',
  styleUrls: ['./newdemo.component.css']
})
export class NewdemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  employeeList: employee[] = [
    new employee('1', 'Steve', 'Male', 'Development'),
    new employee('2', 'Bob', 'Male', 'Design'),
    new employee('3', 'Alexa', 'Female', 'QA'),
  ];
  hueLightData: HueGroup[] = [
    { Name: 'group 1', Lights: [new Light('light 1'), new Light('light 2')] },
    { Name: 'group 2', Lights: [new Light('light 3')] },
  ];
  selectedValue: string = 'Select';
  items: Item[] = [
    new Item('Select', 0),
    new Item('One', 1),
    new Item('Two', 2),
    new Item('Three', 3),
    new Item('Four', 4),
    new Item('Five', 5),
  ];

}
