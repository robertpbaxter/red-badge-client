import { Component, OnInit } from "@angular/core";
import { User } from "../user";
import { AuthService } from "src/app/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  validateSignup(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string
  ) {
    let e = email.toLowerCase().trim();
    let p = password.trim();
    switch (true) {
      case firstName === "":
        alert("First name cannot be blank");
        break;
      case lastName === "":
        alert("Last name cannot be blank");
        break;
      case this.validateEmail(email) === false:
        alert("Email must be a valid email");
        break;
      case password.length < 8:
        alert("Password must be at least 8 characters long");
        break;
      case password.length >= 8 && password != confirmPassword:
        alert("Passwords must match");
        break;
      default:
        this.signup(firstName, lastName, e, p);
    }
  }

  validateEmail(email: string): Boolean {
    let re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    return re.test(email);
  }

  signup(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ): void {
    let permission = "user";
    this.authService
      .signup({ firstName, lastName, email, password, permission } as User)
      .subscribe(credentials => {
        localStorage.setItem("token", credentials.sessionToken);
        localStorage.setItem("role", credentials.user.permission);
        email = "";
        window.location.href = "/home";
      });
  }

  ngOnInit() {}
}
