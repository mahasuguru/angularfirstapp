import { ILogin } from 'src/app/interfaces/login.interface';
import { AuthService } from "src/app/services/auth.service";
import { AfterViewChecked, Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewChecked {
  loggedInUser: ILogin;
  constructor(private authServicec: AuthService, private router: Router) {}
  ngAfterViewChecked(): void {
    this.loggedInUser = this.authServicec.getLoggedInUserData();
  }

  ngOnInit() {
    this.loggedInUser = this.authServicec.getLoggedInUserData();
  }

  logout() {
    this.authServicec.doLogout();
    this.router.navigate(["/navigate"]);
  }
}
