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

  constructor( private upperCasePipe: UpperCasePipe,
    private lowerCasePipe: LowerCasePipe, private productService: ProductService) {

     }
     showImages: boolean = true;
  searchText: string = "";
  selectedSort: string = "";
  products: IProduct[];
  actualProducts: any[];

    ngOnInit() {

      this.loadInitialData();
    }
    private loadInitialData() {
      this.productService.getProducts().subscribe(
        (data: IProduct[]) => {
          console.log(data);
          this.products = data;
          this.actualProducts = [...this.products];
        },
        (error) => {
          console.log("ERROR -", error);
        }
      );
    }

  getTitle(): string {
    return 'Hello from Method';
  }
    // showImage(getImage('path', 'format), 'thumbnail');
    toggleImage(): void {
      this.showImages = !this.showImages;
    }
  changeName() {
    this.products[0].productName = "Nexon";
  }
  filterData() {
    this.products = this.actualProducts.filter((filter) =>
      filter.productName.toLowerCase().includes(this.searchText.toLowerCase())
    );
    this.sortBikesByModel();
  }
  sortBikes(event): void {
    let sortValue = event.target.value;
    if (sortValue === "name") {
      this.products = this.products.sort((a: IProduct, b: IProduct) => {
        if (a.productName > b.productName) return 1;
        else if (b.productName > a.productName) return -1;
        else return 0;
      });
    } else if (sortValue == "price") {
      this.products = this.products.sort((a: IProduct, b: IProduct) => {
        return a.price - b.price;
      });
    }
  }
  sortBikesByModel() {
    if (this.selectedSort === "name") {
      this.products = this.products.sort((a: IProduct, b: IProduct) => {
        if (a.productName > b.productName) return 1;
        else if (b.productName > a.productName) return -1;
        else return 0;
      });
    } else if (this.selectedSort == "price") {
      this.products = this.products.sort((a: IProduct, b: IProduct) => {
        return a.price - b.price;
      });
    }
  }

  onProductDeleted(productName: string) {
   this.productService.deleteProduct(productName);

  }

  onStatusChanged(event) {
    console.log("Status Of Product Changed !", event);
    this.loadInitialData();
  }
}
