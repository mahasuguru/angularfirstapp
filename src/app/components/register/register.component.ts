import { Component, OnInit } from '@angular/core';
import { AbstractControl,FormBuilder, FormGroup, FormControl, ValidatorFn, Validators,FormArray } from '@angular/forms';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { IRegister } from "src/app/interfaces/register.interface";
function rangeValidator(min: number, max: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    console.log("Control - ", control);
    if (
      control !== null &&
      (isNaN(control.value) || control.value < min || control.value > max)
    ) {
      return { range: true };
    }
    //If validation rule passes, we return null
    return null;
  };
}

function matchEmail (control: AbstractControl): { [key: string]: boolean } | null {
  let email = control.get("emailAddress");
  let confirmEmail = control.get("confirmEmailAddress");
  console.log("Control inside Mathc", email, confirmEmail);

  if (email.value !== confirmEmail.value) {
    return { matchEmail : true };
  }
  return null;
}
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
    isSubscribe: true,
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
      emailGroup: this.fb.group(
        {
          emailAddress: ["", [Validators.required, Validators.email]],
          confirmEmailAddress: ["", [Validators.required]],
        },
        { validators: matchEmail  }
      ),
      phoneNumber: "",
      notificationMedium: "email",
      isSubscribe: this.data.isSubscribe,
      rating: [null, [rangeValidator(1, 5)]],
      addressArray: this.fb.array([this.buildAddressGroup()]),
    });
    let notifyControl = this.registerForm.get("notificationMedium");
    notifyControl.valueChanges.subscribe((data) => {
      console.log("valueChanges", data);
      this.notifyUser(data);
    });

  /*  this.registerForm = new FormGroup({
      fullName: new FormControl(),
      emailAddress: new FormControl(),
      isSubscribe: new FormControl(false),
    }); */
  }

  addAddress() {
    this.registerForm
      .get("addressArray")
      ["controls"].push(this.buildAddressGroup());
  }
  buildAddressGroup(): FormGroup {
    return this.fb.group({
      addressType: "",
      address1: ["", [Validators.required]],
      address2: "",
      state: "",
      city: "",
      zip: "",
    });
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
