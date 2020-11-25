import { Component, OnInit } from '@angular/core';
import { IProduct } from "src/app/interfaces/product.interface";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: 'app-new-list-component',
  templateUrl: './new-list-component.component.html',
  styleUrls: ['./new-list-component.component.css']
})
export class NewListComponentComponent implements OnInit {
  private productService: ProductService;
  newProducts: IProduct[];
  constructor() {
    this.productService = new ProductService();
   }

  ngOnInit(): void {
    this.newProducts = this.productService.getProducts();
  }

}
