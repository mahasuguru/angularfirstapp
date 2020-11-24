import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product.interface';
import { IfNullOrEmpty } from "src/app/pipes/if-null-or-empty.pipe";
import { LowerCasePipe, UpperCasePipe } from "@angular/common";
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor( private upperCasePipe: UpperCasePipe,
    private lowerCasePipe: LowerCasePipe,
    private isNullOrEmpty: IfNullOrEmpty) { }

    ngOnInit() {
      console.log('Inside On ngOnInit of ProductListComponent');
    }
  showImages: boolean = false;
  pageTitle: string = 'Bike List';
  searchText: string = "";

  products: IProduct[] = [
    {
      productName: 'Hero Honda CD 100',
      description: "Most popular Bike of India",
      releaseDate: "10-08-1990",
      price: 100,
      isActive: true,
      imageUrl: "https://via.placeholder.com/150?text=CD100SS",
    },
    {
      productName: "Honda Hornet",
      description: "A sports Bike",
      releaseDate: "10-08-2010",
      price: 200,
      isActive: true,
      imageUrl: "https://via.placeholder.com/150?text=Hornet",
    },
    {
      productName: "Super splendor",
      description: "A Bike that the nation trusts",
      releaseDate: "10-08-1980",
      price: 75,
      isActive: true,

      imageUrl: "https://via.placeholder.com/150?text=Splendor",
    },
    {
      productName: "Yamaha RX 100",
      description: null ,
      releaseDate: "10-08-1987",
      price: 122,
      isActive: false,
      imageUrl: "https://via.placeholder.com/150?text=RX100",
    },
    {
      productName: "Bajaj Pulsar",
      description: "",
      releaseDate: "10-08-1920",
      price: 9,
      isActive: false,
      imageUrl: "https://via.placeholder.com/150?text=Pulsar",
    },
  ];
  actualBikes: IProduct[] = [...this.products];

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
  getClasses(product: IProduct) {
    // 'classname'

    // 'class1 class2'

    // ['class1', 'class2', 'class3']

    // {
    //     'classname1':expression1 ,
    //     'classname2':expression2 ,
    // }

    const is200 = product.price === 200;
    if (is200) {
      return {
        "my-green": is200,
        bold: is200,
      };
    } else {
      return {};
    }
  }

  getStyles(product: IProduct) {
    if (product.price == 200) {
      return {
        color: "red",
        "font-weight": "bold",
      };
    } else {
      return {};
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

}
