import { Component, OnInit } from "@angular/core";
import { User } from "../user";
import { AuthService } from "src/app/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  login(email: string, password: string): void {
    this.authService
      .login({ email, password } as User)
      .subscribe(credentials => {
        localStorage.setItem("token", credentials.sessionToken);
        localStorage.setItem("role", credentials.permission);
      });
  }

  ngOnInit() {}
}
