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
        "",
        [Validators.required, Validators.minLength(4), Validators.maxLength(8)],
      ],
      emailAddress: ["", [Validators.required, Validators.email]],
      phoneNumber: "",
      notificationMedium: "email",
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
notifyUser(notifyBy: string) {
  console.log("I want to opt in via " + notifyBy);
  let phoneControl = this.registerForm.get("phoneNumber");
  console.log("phoneControl", phoneControl);

  if (notifyBy === "phone") {
    phoneControl.setValidators(Validators.required);
  } else {
    phoneControl.clearValidators();
  }

  phoneControl.updateValueAndValidity();
}
}
