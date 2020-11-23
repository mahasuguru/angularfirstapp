import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {

  constructor() { }

  pageTitle: string = 'Bike List';
  products: IProduct[] = [
    {
      productName: 'Hero Honda CD 100',
      description: "Most popular Bike of India",
      releaseDate: "10-08-1990",
      price: 100,
      isActive: false,
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
      description: "Nostalgic !",
      releaseDate: "10-08-1987",
      price: 122,
      isActive: false,
      imageUrl: "https://via.placeholder.com/150?text=RX100",
    },
  ];

  getTitle(): string {
    return 'Hello from Method';
  }
}
