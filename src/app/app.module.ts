import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { ProductsComponent } from './components/products.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { IfNullOrEmpty } from './pipes/if-null-or-empty.pipe';
import { LowerCasePipe, UpperCasePipe } from "@angular/common";
@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    ProductlistComponent,
    IfNullOrEmpty
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UpperCasePipe, LowerCasePipe, IfNullOrEmpty],
  bootstrap: [HomeComponent]
})
export class AppModule { }
