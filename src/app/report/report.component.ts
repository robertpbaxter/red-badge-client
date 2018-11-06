import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { TicketService } from "../ticket.service";
import { Ticket } from "../ticket";

@Component({
  selector: "app-report",
  templateUrl: "./report.component.html",
  styleUrls: ["./report.component.css"]
})
export class ReportComponent implements OnInit {
  type = "report";
  status = "new";
  housingId = this.data.housingId || null;
  messageId = this.data.messageId || null;

  constructor(
    private ticketService: TicketService,
    public dialogRef: MatDialogRef<ReportComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}

  submitReport(issue: string, content: string): void {
    this.report(
      this.type,
      issue,
      content,
      this.status,
      this.housingId,
      this.messageId
    );
  }

  report(
    type: string,
    issue: string,
    content: string,
    status: string,
    housingId: number,
    messageId: number
  ): void {
    this.ticketService
      .newTicket({
        type,
        issue,
        content,
        status,
        housingId,
        messageId
      } as Ticket)
      .subscribe(result => {
        if (result.ticket.id) {
          alert("Report sent.");
          this.dialogRef.close();
        }
      });
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
