import { Component, OnInit } from "@angular/core";
import { User } from "../user";
import { AuthService } from "src/app/auth.service";
import { ThrowStmt } from "@angular/compiler";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  validateLogin(email: string, password: string) {
    let e = email.toLowerCase().trim();
    let p = password.trim();
    this.login(e, p);
  }

  login(email: string, password: string): void {
    console.log('Welcome!')
    this.authService
      .login({ email, password } as User)
      .subscribe(credentials => {
        localStorage.setItem("token", credentials.sessionToken);
        localStorage.setItem("role", credentials.user.permission);
        email = "";
      });
  }

  ngOnInit() {}
}
