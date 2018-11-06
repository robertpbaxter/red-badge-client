import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TicketService } from "../ticket.service";
import { Ticket } from "../ticket";

@Component({
  selector: "app-support-form",
  templateUrl: "./support-form.component.html",
  styleUrls: ["./support-form.component.css"]
})
export class SupportFormComponent implements OnInit {
  private type = "support";
  private status = "new";

  constructor(private ticketService: TicketService, private router: Router) {}

  submitSupport(issue: string, content: string): void {
    this.support(this.type, issue, content, this.status);
  }

  support(type: string, issue: string, content: string, status: string): void {
    this.ticketService
      .newTicket({ type, issue, content, status } as Ticket)
      .subscribe(results => {
        if (results.ticket.id) {
          alert("Request Sent");
          this.router.navigate(["/home"]);
        }
      });
  }

  ngOnInit() {}
}
