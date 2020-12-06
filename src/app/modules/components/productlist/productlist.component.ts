import { Component, OnInit,OnDestroy } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product.interface';
import { IfNullOrEmpty } from "src/app/pipes/if-null-or-empty.pipe";
import { LowerCasePipe, UpperCasePipe } from "@angular/common";
import { ProductService } from "src/app/services/product.service";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { MatTableDataSource } from "@angular/material/table";
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styles: [
    `
      table {
        width: 100%;
      }
    `,
  ],
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit, OnDestroy{
  displayedColumns: string[] = [
    "productName",
    "description",
    "releaseDate",
    "rating",
    "price",
  ];
  dataSource: MatTableDataSource<IProduct>;

  private ngUnsubscribe: Subject<any> = new Subject();
  constructor( private upperCasePipe: UpperCasePipe,
    private lowerCasePipe: LowerCasePipe, private productService: ProductService) {

     }
     ngOnDestroy(): void {
      this.ngUnsubscribe.next();
      this.ngUnsubscribe.complete();
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
      this.productService
      .getProducts()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (data: IProduct[]) => {
          console.log(data);
          this.products = data;
          this.actualProducts = [...this.products];
          this.dataSource = new MatTableDataSource<IProduct>(data);
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
    console.log("Product Deleted !", event);
    this.loadInitialData();

  }

  onStatusChanged(event) {
    console.log("Status Of Product Changed !", event);
    this.loadInitialData();
  }
}
