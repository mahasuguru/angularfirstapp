
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
   <ng-http-loader></ng-http-loader>
    <app-navbar> </app-navbar>
    <hr/>
    <router-outlet> </router-outlet>
`,
})
export class HomeComponent implements OnInit {


  constructor() {
  }
  ngOnInit() {

  }

}
