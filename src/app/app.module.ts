
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
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
import { ProductsModule } from './modules/products/products.module';
import { EmployeeModule } from './modules/employees/employee/employee.module';
 import { SharedModule } from './shared/shared.module';
 import { WiproHttpInterceptor } from "./services/http-interceptor.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
        path: "products",
        loadChildren: "./modules/products/products.module#ProductsModule",
      },
      {
        path: "employees",
        loadChildren: "./modules/employees/employee/employee.module#EmployeeModule",
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
  //  ProductsModule,
  //  EmployeeModule,
   SharedModule,
  BrowserAnimationsModule,
  ],
  providers: [UpperCasePipe, LowerCasePipe, IfNullOrEmpty,  {
    provide: ProductService,
    useClass: ProductService,
  }, UtilityService, {
    provide: ProductDetailsGuardService,
    useClass: ProductDetailsGuardService,
  },
  ProductResolverService,  AuthService, IsLoggedInUserGuardService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: WiproHttpInterceptor,
    multi: true,
  },],
  bootstrap: [HomeComponent]
})
export class AppModule { }
