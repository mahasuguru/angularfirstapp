
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
import { ProductService } from "./services/product.service";
import { UtilityService } from "./services/utility.service";
import { NgHttpLoaderModule } from "ng-http-loader";
import { RouterModule } from "@angular/router";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { ProductdetailsComponent } from "./components/productdetails/productdetails.component";
import { PagenotfoundComponent } from "./components/pagenotfound/pagenotfound.component";
import { ProductDetailsGuardService } from "./guards/product-details-guard.service";
import { ProductResolverService } from "./resolvers/product-resolver.service";
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from "./services/auth.service";
import { IsLoggedInUserGuardService } from "./guards/is-logged-in-user.service";
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    ProductlistComponent,
    IfNullOrEmpty,
    FilterBikesPipe,
    ProductdetailsComponent,
    WelcomeComponent,
    PagenotfoundComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: "products",
        component: ProductlistComponent,
        canActivate: [IsLoggedInUserGuardService],
      },
      {
        path: "products/:id",
        component: ProductdetailsComponent,
        canActivate: [ProductDetailsGuardService, IsLoggedInUserGuardService],
        resolve: {
          productData: ProductResolverService,
        },
      },
      {
        path: "welcome",
        component: WelcomeComponent,
      },
      {
        path: "register",
        component: RegisterComponent,
      },
      {
        path: "login",
        component: LoginComponent,
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
  providers: [UpperCasePipe, LowerCasePipe, IfNullOrEmpty, ProductService, UtilityService, {
    provide: ProductDetailsGuardService,
    useClass: ProductDetailsGuardService,
  },
  ProductResolverService,  AuthService, IsLoggedInUserGuardService,],
  bootstrap: [HomeComponent]
})
export class AppModule { }
