import { Component, OnInit } from "@angular/core";
import { User } from "../user";
import { AuthService } from "src/app/auth.service";
import { ThrowStmt } from "@angular/compiler";
import { Router } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  validateLogin(email: string, password: string) {
    let e = email.toLowerCase().trim();
    let p = password.trim();
    if (e === '') {
      alert("Please enter email")
    } else if (p === '') {
      alert('Please enter password')
    } else {
    this.login(e, p);
    }
  }
  
  login(email: string, password: string): void {
    console.log('Welcome!')
    this.authService
    .login({ email, password } as User)
    .subscribe(credentials => { console.log(credentials)
      localStorage.setItem("token", credentials.sessionToken);
      localStorage.setItem("role", credentials.user.permission);
      email = "";
      // this.router.navigate(['/home'])
      window.location.href = '/home'
      });
    }
    
  ngOnInit() {}
}
