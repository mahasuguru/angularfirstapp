import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {ILogin} from 'src/app/interfaces/login.interface';
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
    emailAddress: "",
    password: "",
  };

  constructor() { }
  ngOnInit() {}
  submitForm(form: NgForm) {
    console.log("Login form submitted", form);
  }
}
