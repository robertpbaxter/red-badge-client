import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { UserService } from "../user.service";
import { HousingService } from "../housing.service";
import { CoordsService } from "../coords.service";
import { TicketService } from "../ticket.service";
import { MessageService } from "../message.service";

@Component({
  selector: "app-delete-account",
  templateUrl: "./delete-account.component.html",
  styleUrls: ["./delete-account.component.css"]
})
export class DeleteAccountComponent {
  constructor(
    private userService: UserService,
    private housingService: HousingService,
    private coordsService: CoordsService,
    private ticketService: TicketService,
    private messageService: MessageService,
    public dialogRef: MatDialogRef<DeleteAccountComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  confirm(): void {
    this.userService.deleteSelfUser().subscribe();
    this.coordsService.deleteSelfCoords().subscribe();
    this.housingService.deleteSelfHousing().subscribe();
    this.ticketService.deleteSelfTicket().subscribe();
    this.messageService.deleteSelfMessages().subscribe();
    alert("Goodbye!");
    localStorage.clear();
    window.location.href = "/auth";
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
