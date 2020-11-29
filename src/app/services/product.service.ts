 import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';
import { UtilityService } from "./utility.service";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { AddProduct } from "../interfaces/add-product";
@Injectable({
  providedIn: "root",
})
export class ProductService {
  lastDeletedProduct: string;
   // notyf: Notyf;
  private _baseUrl: string = "http://testapi.techriff.in/api";
  constructor(private http: HttpClient, private utilityService: UtilityService) {
   // this.notyf = new Notyf();
  }

  getProduct(id: number): Observable<IProduct> {
  //  return this.http
  //    .get<IProduct>(`${this._baseUrl}/open/products/${id}`)
  //    .pipe(catchError(this.handleError));
      return this.http.get<IProduct>(`${this._baseUrl}/products/${id}`);
  }
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this._baseUrl}/products`);
  }
  changeStatus(id: number, status: string): Observable<IProduct> {
    if (status == "reactivate") {
      return this.http.post<IProduct>(
        `${this._baseUrl}/products/${id}/reactivate`,
        null
      );
    } else {
      return this.http.post<IProduct>(
        `${this._baseUrl}/products/${id}/deactivate`,
        null
      );
    }
  }
  deleteProduct(id: number): Observable<IProduct> {
    return this.http.delete<IProduct>(`${this._baseUrl}/products/${id}`);
  }
  createNewProduct(product: AddProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`${this._baseUrl}/products`, product);
  }
}
