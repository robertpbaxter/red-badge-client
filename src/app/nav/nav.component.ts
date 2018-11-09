import { Component, OnInit } from "@angular/core";
import { MessageService } from "../message.service";
import { Router } from "@angular/router";
import { UserService } from "../user.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  isLoggedIn = localStorage.getItem("token");
  isAdmin = this.verifyAdmin();
  newMessages = null;

  constructor(
    private messageService: MessageService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getSelf();
    this.isLoggedIn;
    if (this.isLoggedIn) {
      this.fetchNotifications();
    }
  }

  getSelf(): void {
    this.userService.getSelf().subscribe(user => {
      if (!user) {
        localStorage.clear();
        this.router.navigate(["/auth"]);
      }
    });
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
