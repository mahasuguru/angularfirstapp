
import { Component, OnInit } from "@angular/core";


@Component({
  selector: 'app-home',
  template: `
   <ng-http-loader></ng-http-loader>
   <h3>hai am hello component</h3>
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
