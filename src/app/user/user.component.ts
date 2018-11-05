import { Component, OnInit, Input } from "@angular/core";
import { UserService } from "../user.service";
import { User } from "../user";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  @Input()
  userId = this.userId;
  user: User;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUser(this.userId);
  }

  getUser(id: number): void {
    this.userService.getUser(id).subscribe(data => (this.user = data));
  }
}
