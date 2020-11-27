
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { IfNullOrEmpty } from './pipes/if-null-or-empty.pipe';
import { LowerCasePipe, UpperCasePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ProductService } from "./services/product.service";
import { UtilityService } from "./services/utility.service";
import { NgHttpLoaderModule } from "ng-http-loader";
import { RouterModule } from "@angular/router";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { PagenotfoundComponent } from "./components/pagenotfound/pagenotfound.component";
import { ProductDetailsGuardService } from "./guards/product-details-guard.service";
import { ProductResolverService } from "./resolvers/product-resolver.service";
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from "./services/auth.service";
import { IsLoggedInUserGuardService } from "./guards/is-logged-in-user.service";
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsModule } from './modules/products/products.module';
import { EmployeeModule } from './modules/employees/employee/employee.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    WelcomeComponent,
    PagenotfoundComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,

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
    ProductsModule,
    EmployeeModule,
    SharedModule,
  ],
  providers: [UpperCasePipe, LowerCasePipe, IfNullOrEmpty, ProductService, UtilityService, {
    provide: ProductDetailsGuardService,
    useClass: ProductDetailsGuardService,
  },
  ProductResolverService,  AuthService, IsLoggedInUserGuardService,],
  bootstrap: [HomeComponent]
})
export class AppModule { }
