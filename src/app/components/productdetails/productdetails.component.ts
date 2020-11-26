 import { Component, OnInit } from '@angular/core';
 import { ActivatedRoute, Router  } from "@angular/router";
 import { IProduct } from "src/app/interfaces/product.interface";
 import { ProductService } from "src/app/services/product.service";
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  currentProductId: number;
  currentProduct: IProduct;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService, private router: Router
  )  { }

  ngOnInit(): void {
    console.log("Inside INIT", this.activatedRoute);
    console.log("Router", this.router);
    this.currentProductId = +this.activatedRoute.snapshot.paramMap.get("id");
    this.loadInitialData();
  }
  goBack() {
    this.router.navigate(["/products"]);
  }
  private loadInitialData() {
   // this.productService.getProduct(this.currentProductId).subscribe(
   //   (data: IProduct) => {
   //     this.currentProduct = data;
   //   },
   //   (error) => {
   //     console.log("ERROR -", error);
   //   }
   // );
    this.currentProduct = this.activatedRoute.snapshot.data["productData"];
  }
}
