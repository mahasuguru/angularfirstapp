import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <h2>Hello From Home</h2>
  <h2 class="text-primary">Hello From Home</h2>
  <i class="fa fa-user fa-3x"> </i>
  <hr/>
  <app-productlist></app-productlist>
`,
})
export class HomeComponent {

}
