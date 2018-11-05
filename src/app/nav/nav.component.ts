import { Component, OnInit } from "@angular/core";
import { MessageService } from "../message.service";
// import { Location } from '@angular/common';

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  isLoggedIn = localStorage.getItem("token");
  isAdmin = this.verifyAdmin();
  newMessages = null;

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.isLoggedIn;
    this.fetchNotifications();
  }

  logout(): void {
    localStorage.clear();
    window.location.href = "/auth";
  }

  verifyAdmin() {
    if (localStorage.getItem("role") !== "admin") {
      return false;
    } else {
      return true;
    }
  }

  fetchNotifications() {
    this.messageService.fetchNotifcations().subscribe(notifications => {
      notifications > 0
        ? (this.newMessages = notifications)
        : (this.newMessages = "");
    });
  }
}
