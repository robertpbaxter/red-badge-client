import { Component, OnInit } from "@angular/core";
import { MessageService } from "../message.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  isLoggedIn = localStorage.getItem("token");
  isAdmin = this.verifyAdmin();
  newMessages = null;

  constructor(private messageService: MessageService, private router: Router) {}

  ngOnInit() {
    this.isLoggedIn;
    this.fetchNotifications();
  }

  goToInbox(): void {
    this.newMessages = null;
    this.router.navigate(["/inbox"]);
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
