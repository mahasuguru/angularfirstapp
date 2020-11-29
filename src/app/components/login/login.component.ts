import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {ILogin} from 'src/app/interfaces/login.interface';
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  details: ILogin;
  originalData: ILogin;
  data: {
    emailAddress: string;
    password: string;
  } = {
    emailAddress: "maha@gmail.com",
    password: "maha123",
  };

  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit() {}
  submitForm(form: NgForm) {
    console.log("Login form submitted", form);
    this.authService
      .getUserToken(this.data.emailAddress, this.data.password)
      .subscribe((response: ILogin) => {
        this.authService.doLogin(response);
        this.router.navigate(["/products"]);
      });
  }
}
