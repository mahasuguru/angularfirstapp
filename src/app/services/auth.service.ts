import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ILogin } from 'src/app/interfaces/login.interface';
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
  private readonly _token: string = "userData";
  private _baseUrl: string = "http://testapi.techriff.in/api";

  getLoggedInUserData(): ILogin {

    if (window.localStorage.getItem(this._token)) {
      return JSON.parse(window.localStorage.getItem(this._token)) as ILogin;
    }
    return null;
  }

  getUserToken(email: string, password: string): Observable<ILogin> {
    let body = `userName=${email}&password=${password}&grant_type=password`;
    return this.http
      .post<ILogin>(`http://testapi.techriff.in/Token`, body)
      .pipe(
        map(
          (data: any) =>
            ({
              userName: data.userName,
              accessToken: data.access_token,
            } as ILogin)
        )
      );
  }

  doLogin(userData: ILogin) {
    window.localStorage.setItem(this._token, JSON.stringify(userData));
  }
  doLogout() {
    window.localStorage.clear();
  }

  login(details){
console.log(details);
return this.http
.post(`${this._baseUrl}/Account/Register`, this.value);

  }
}
