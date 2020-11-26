 import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';
import { UtilityService } from "./utility.service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class ProductService {
  lastDeletedProduct: string;
   // notyf: Notyf;
  private _baseUrl: string = "http://testapi.techriff.in/api";
  constructor(private http: HttpClient) {
   // this.notyf = new Notyf();
  }


  getProducts(): Observable<IProduct[]> {

    return this.http.get<IProduct[]>(`${this._baseUrl}/open/products`);
  }
  changeStatus(id: number, status: string): Observable<IProduct> {
    if (status == "reactivate") {
      return this.http.post<IProduct>(
        `${this._baseUrl}/open/products/${id}/reactivate`,
        null
      );
    } else {
      return this.http.post<IProduct>(
        `${this._baseUrl}/open/products/${id}/deactivate`,
        null
      );
    }
  }
  deleteProduct(bikename: string): void {
    this.lastDeletedProduct = bikename;
    // this.UtilityService.showError(`${bikename} is deleted!`);
  }
}
