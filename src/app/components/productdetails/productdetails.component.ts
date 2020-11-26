 import { Component, OnInit } from '@angular/core';
 import { ActivatedRoute } from "@angular/router";
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
    private productService: ProductService
  )  { }

  ngOnInit(): void {
    this.currentProductId = +this.activatedRoute.snapshot.paramMap.get("id");
    this.loadInitialData();
  }
  private loadInitialData() {
    this.productService.getProduct(this.currentProductId).subscribe(
      (data: IProduct) => {
        this.currentProduct = data;
      },
      (error) => {
        console.log("ERROR -", error);
      }
    );
  }
}
