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
  product: IProduct = {
    productName: 'Hero Honda CD 100',
    description: `India's Most loved bike`,
    price: 200,
    releaseDate: '10-10-1990',
    isActive: false,
    imageUrl: 'https://via.placeholder.com/200?text=CD100SS',
  };

  getTitle(): string {
    return 'Hello from Method';
  }
}
