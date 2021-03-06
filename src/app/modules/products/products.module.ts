import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductlistComponent } from "..//components/productlist/productlist.component";
import { ProductsComponent } from "..//components/products.component";
import { ProductdetailsComponent } from "..//components/productdetails/productdetails.component";
import { IfNullOrEmpty } from "src/app/pipes/if-null-or-empty.pipe";
import { FilterBikesPipe } from "src/app/pipes/filter-bikes.pipe";
import { RouterModule } from "@angular/router";
import { IsLoggedInUserGuardService } from "src/app/guards/is-logged-in-user.service";
import { ProductDetailsGuardService } from "src/app/guards/product-details-guard.service";
import { ProductResolverService } from "src/app/resolvers/product-resolver.service";
import { SharedModule } from "src/app/shared/shared.module";
import { CreateProductComponent } from '..//components/create-product/create-product.component';
import { MaterialModule } from "src/app/material/material.module";
@NgModule({
  declarations: [
    ProductlistComponent,
    ProductsComponent,
    ProductdetailsComponent,
    CreateProductComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: ProductlistComponent,
        canActivate: [IsLoggedInUserGuardService],
      },
      {
        path: "create",
        component: CreateProductComponent,
      },
      {
        path: ":id",
        component: ProductdetailsComponent,
        canActivate: [IsLoggedInUserGuardService, ProductDetailsGuardService],
        resolve: {
          product: ProductResolverService,
        },
      },
    ]),
     SharedModule,
     MaterialModule,
  ],
})
export class ProductsModule { }
