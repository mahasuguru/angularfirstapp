import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductlistComponent } from "..//components/productlist/productlist.component";
import { ProductsComponent } from "..//components/products.component";
import { ProductdetailsComponent } from "..//components/productdetails/productdetails.component";
import { IfNullOrEmpty } from "src/app/pipes/if-null-or-empty.pipe";
import { FilterBikesPipe } from "src/app/pipes/filter-bikes.pipe";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { IsLoggedInUserGuardService } from "src/app/guards/is-logged-in-user.service";
import { ProductDetailsGuardService } from "src/app/guards/product-details-guard.service";
import { ProductResolverService } from "src/app/resolvers/product-resolver.service";

@NgModule({
  declarations: [
    ProductlistComponent,
    ProductsComponent,
    ProductdetailsComponent,
    IfNullOrEmpty,
    FilterBikesPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: "products",
        component: ProductlistComponent,
        canActivate: [IsLoggedInUserGuardService],
      },
      {
        path: "products/:id",
        component: ProductdetailsComponent,
        canActivate: [IsLoggedInUserGuardService, ProductDetailsGuardService],
        resolve: {
          product: ProductResolverService,
        },
      },
    ]),
  ],
})
export class ProductsModule { }
