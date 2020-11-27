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
  constructor() { }


  ngOnInit() {
  this.details = {
    name: '',
    password: '',
    subsrcibe: true,
    gender : '',
    emailaddress : '',
        };
        this.originalData = { ...this.details };


  }
  submitform(form: NgForm){
    console.log(form.value);

  }
}
