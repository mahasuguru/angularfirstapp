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

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private route: Router, private authService: AuthService) { }
  loginForm: FormGroup;
  isSubmitted  =  false;
  ngOnInit(): void {
    this.loginForm  =  this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required]
  });
  }
  get formControls() { return this.loginForm.controls; }
  onSubmit(form: FormGroup) {
    console.log(this.loginForm.value);
   this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }

    this.authService.login(this.loginForm.value).subscribe((data => {
      console.log(data);
    }));
    this.route.navigateByUrl('/login');
  }
}
