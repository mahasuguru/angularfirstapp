import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product.interface';
import { IfNullOrEmpty } from "src/app/pipes/if-null-or-empty.pipe";
import { LowerCasePipe, UpperCasePipe } from "@angular/common";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  productService: ProductService;
  constructor( private upperCasePipe: UpperCasePipe,
    private lowerCasePipe: LowerCasePipe,
    private isNullOrEmpty: IfNullOrEmpty) {
      this.productService = new ProductService();

     }

    ngOnInit() {
      console.log('Inside On ngOnInit of ProductListComponent');
      this.products =   this.productService.getProducts();
      this.actualBikes = [...this.products];
    }
  showImages: boolean = false;
  pageTitle: string = 'Bike List';
  searchText: string = "";


  products: IProduct[];
  actualBikes: IProduct[];
  getTitle(): string {
    return 'Hello from Method';
  }
    // showImage(getImage('path', 'format), 'thumbnail');
  toggleImages(): void {
    this.showImages = !this.showImages;
    if (this.showImages) {
      this.pageTitle = this.isNullOrEmpty.transform(
        this.upperCasePipe.transform(this.pageTitle),
        "N/A"
      );
    } else {
      this.pageTitle = this.isNullOrEmpty.transform(
        this.lowerCasePipe.transform(this.pageTitle),
        "N/A"
      );
    }
  }
  changeName() {
    this.products[0].productName = "Nexon";
  }
  mouseEnterEvent() {}
  filterBikes() {
    if (this.searchText) {
      this.products = this.actualBikes.filter((x) =>
        x.productName.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      this.products = this.actualBikes;
    }
  }
  onSuccessfullyDeleted(productName: string) {
    console.log("Inside Product List Componnet ", productName);
    this.products.splice(
      this.products.findIndex((item) => item.productName === productName),
      1
    );
  }
}
