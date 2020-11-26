
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
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
import { NgHttpLoaderModule } from "ng-http-loader";
import { RouterModule } from "@angular/router";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { ProductdetailsComponent } from "./components/productdetails/productdetails.component";
import { PagenotfoundComponent } from "./components/pagenotfound/pagenotfound.component";
import { ProductDetailsGuardService } from "./guards/product-details-guard.service";
@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    ProductlistComponent,
    IfNullOrEmpty,
    FilterBikesPipe,
    ChildComponent,
    AccordianComponent,
    NewListComponentComponent,
    ProductdetailsComponent,
    WelcomeComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),
    RouterModule.forRoot([
      {
        path: "products",
        component: ProductlistComponent,
      },
      {
        path: "products/:id",
        component: ProductdetailsComponent,
        canActivate: [ProductDetailsGuardService],
      },
      {
        path: "welcome",
        component: WelcomeComponent,
      },
      {
        path: "",
        redirectTo: "welcome",
        pathMatch: "full",
      },
      {
        path: "**",
        component: PagenotfoundComponent,
      },
    ]),
  ],
  providers: [UpperCasePipe, LowerCasePipe, IfNullOrEmpty, ProductService, UtilityService, ProductDetailsGuardService,],
  bootstrap: [HomeComponent]
})
export class AppModule { }
