import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { IRegister } from "src/app/interfaces/register.interface";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  data: IRegister = {
    fullName: "John Smith",
    emailAddress: "",
    country: "",
    gender: "",
    isSubscribe: false,
    password: "",
  };

  registerForm: FormGroup;
  constructor(private fb: FormBuilder, private route: Router, private authService: AuthService) { }
  loginForm: FormGroup;
  isSubmitted  =  false;
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      fullName: [
        "maha",
        [Validators.required, Validators.minLength(4), Validators.maxLength(8)],
      ],
      emailAddress: ["", [Validators.required, Validators.email]],
      isSubscribe: false,
    });
  /*  this.registerForm = new FormGroup({
      fullName: new FormControl(),
      emailAddress: new FormControl(),
      isSubscribe: new FormControl(false),
    }); */
  }


submitForm() {
  console.log("Form SUbmitted ", this.registerForm);
}
fillWithDummyData() {
  //API Call
  let datafromservice = {
    fullName: "mahalakshmi",
    emailAddress: "maha@gmail.com",
    is_Subscribed: true,
  };
  console.log("Fetching Data");
  this.registerForm.patchValue({
    fullName: datafromservice.fullName,
    emailAddress: datafromservice.emailAddress,
  });
  this.registerForm.setValue({
    fullName: datafromservice.fullName,
    emailAddress: datafromservice.emailAddress,
   isSubscribe:  datafromservice.is_Subscribed,

  });
}
}
