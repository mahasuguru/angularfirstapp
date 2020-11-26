 import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';
import { UtilityService } from "./utility.service";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
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
    return this.http
      .get<IProduct>(`${this._baseUrl}/open/products/${id}`)
      .pipe(catchError(this.handleError));
  }
  getProducts(): Observable<IProduct[]> {

    return this.http
    .get<IProduct[]>(`${this._baseUrl}/open/products`)
    .pipe(catchError(this.handleError));
  }
  changeStatus(id: number, status: string): Observable<IProduct> {
    if (status == "reactivate") {
      return this.http
        .post<IProduct>(`${this._baseUrl}/open/products/${id}/reactivate`, null)
        .pipe(catchError(this.handleError));
    } else {
      return this.http
      .post<IProduct>(`${this._baseUrl}/open/products/${id}/deactivate`, null)
      .pipe(catchError(this.handleError));
    }
  }
  deleteProduct(id: number): Observable<IProduct> {
    return this.http
      .delete<IProduct>(`${this._baseUrl}/open/products/${id}`)
      .pipe(catchError(this.handleError));
  }
  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error("Client Side Errors ", errorResponse.error);
    } else {
      console.error("Server Side Errors ", errorResponse.error);
    }
    return throwError(
      "Sorry, We are having some issues now. Please get back later."
    );
  }
}
