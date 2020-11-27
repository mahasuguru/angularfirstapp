import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators, FormsModule} from '@angular/forms';
import {ILogin} from 'src/app/interfaces/login.interface';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  details: ILogin =  {
    name: 'maha',
    password: 'maha123',
    subsrcibe: 'true',
    gender : 'Male',
    emailaddress : 'mah@gmail.com',
        }

  ngOnInit() {
    let originalval;
    originalval = [...[this.details]];
    console.log(originalval);
    console.log(this.details);


  }
  submitform(form){
    console.log(form.value);

  }
}
