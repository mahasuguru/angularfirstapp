import { Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges, } from '@angular/core';
  import { IProduct } from "src/app/interfaces/product.interface";
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  dateTime: Date = new Date();

  constructor() {}

  logFromChildComponent(name) {
    console.log("Logging inside Child Component ", name);
  }

}
