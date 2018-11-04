import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";
// import { Location } from '@angular/common';

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  isLoggedIn = localStorage.getItem("token");
  isAdmin = this.verifyAdmin();

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isLoggedIn;
  }

  logout(): void {
    this.authService.logout();
  }

  verifyAdmin() {
    if (localStorage.getItem("role") !== "admin") {
      return false;
    } else {
      return true;
    }
  }
}
