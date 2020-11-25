
import { IProduct } from "../interfaces/product.interface";
import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-home',
  template: `
  <h2 class="text-primary" #header>Hello From Home</h2>
  <app-productlist></app-productlist>
  <app-new-list-component></app-new-list-component>
`,
})
export class HomeComponent implements OnInit {


  constructor() {
  }
  ngOnInit() {

  }

}
