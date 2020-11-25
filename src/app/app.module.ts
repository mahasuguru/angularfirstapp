import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { ProductsComponent } from './components/products.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { IfNullOrEmpty } from './pipes/if-null-or-empty.pipe';
import { LowerCasePipe, UpperCasePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { FilterBikesPipe } from "./pipes/filter-bikes.pipe";
import { ChildComponent } from './components/child/child.component';
import { AccordianComponent } from './components/accordian/accordian.component';
import { NewListComponentComponent } from './components/new-list-component/new-list-component.component';
import { ProductService } from "./services/product.service";
import { UtilityService } from "./services/utility.service";

@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    ProductlistComponent,
    IfNullOrEmpty,
    FilterBikesPipe,
    ChildComponent,
    AccordianComponent,
    NewListComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UpperCasePipe, LowerCasePipe, IfNullOrEmpty, ProductService, UtilityService],
  bootstrap: [HomeComponent]
})
export class AppModule { }
