import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
// import { Location } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  // isAdmin: boolean = false;
  isLoggedIn = localStorage.getItem('token');
  // isAdmin = localStorage.getItem('role');
  
  constructor(
    // private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    // this.verifyAdmin();
    this.isLoggedIn
  }

  logout(): void {
    this.authService.logout();
    // this.router.navigate(['/auth']);
    window.location.href = '/auth'
  }

  verifyAdmin() {
      if(localStorage.getItem('role') !== 'admin'){
        return false
      } else {
        return true
      }
  }
}
