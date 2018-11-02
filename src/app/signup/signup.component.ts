import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AuthService } from 'src/app/auth.service';
import { Alert } from 'selenium-webdriver';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) { }

  validateSignup(firstName: string, lastName: string, email: string, password: string, confirmPassword: string){
    let e = email.toLowerCase().trim();
    let p = password.trim();
    
    if(password.length > 5 && password === confirmPassword){
      this.signup(firstName, lastName, e, p)
    } else if (password.length >5 && password != confirmPassword ) {
      alert('Your passwords don\'t match')
    } else if (password.length < 6) {
      alert('Password must be at least 6 characters long')
    } else {
      alert('Error!')
    }
  }
  
  signup(firstName: string, lastName: string, email: string, password: string): void {
    console.log('You are in!')
    // console.log('signup attempted')
    let permission="user";
    // console.log(firstName, lastName, email, password, this.permission)
    this.authService
      .signup({ firstName, lastName, email, password, permission } as User)
      .subscribe(credentials => {
        localStorage.setItem("token", credentials.sessionToken);
        localStorage.setItem("role", credentials.user.permission);
        email = "";
        // this.router.navigate(['/home'])
        window.location.href = '/auth'
      });
  }

  ngOnInit() {
  }

}
