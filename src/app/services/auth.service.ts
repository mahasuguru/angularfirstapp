import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  value: {
    "email":"maha@gmail.com",
    "password":"maha",
    "confirmpassword" :"maha",
  }
  constructor(private http: HttpClient) { }
  private _baseUrl: string = "http://testapi.techriff.in/api";

  isUserLoggedIn() {
    return true;
  }

  login(details){
console.log(details);
return this.http
.post(`${this._baseUrl}/Account/Register`, this.value);

  }
}
