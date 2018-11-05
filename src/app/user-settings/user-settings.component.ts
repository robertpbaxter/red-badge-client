import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { User } from "../user";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { DeleteAccountComponent } from "../delete-account/delete-account.component";

@Component({
  selector: "app-user-settings",
  templateUrl: "./user-settings.component.html",
  styleUrls: ["./user-settings.component.css"]
})
export class UserSettingsComponent implements OnInit {
  user = {
    id: null,
    firstName: "",
    lastName: "",
    email: ""
  };
  constructor(public dialog: MatDialog, private userService: UserService) {}

  ngOnInit() {
    this.getSelf();
  }

  getSelf(): void {
    this.userService.getSelf().subscribe(user => {
      this.user = user;
    });
  }

  updateUser(firstName: string, lastName: string, email: string): void {
    let id = this.user.id;
    this.userService
      .updateUser({ id, firstName, lastName, email } as User)
      .subscribe(result => {
        if (result[0] === 1) {
          alert("Successfully updated.");
        }
      });
  }

  confirmDelete(): void {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(DeleteAccountComponent, dialogConfig);
  }
}
