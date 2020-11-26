
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
   <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" [routerLink]="['/welcome']">Wipro</a>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" [routerLink]="['/welcome']">Home </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" [routerLink]="['/products']">Products</a>
        </li>
      </ul>
    </nav>
    <router-outlet> </router-outlet>
`,
})
export class HomeComponent implements OnInit {


  constructor() {
  }
  ngOnInit() {

  }

}
