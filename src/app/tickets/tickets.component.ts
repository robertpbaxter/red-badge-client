import { Component, OnInit } from "@angular/core";
import { Ticket } from "../ticket";
import { TicketService } from "../ticket.service";

@Component({
  selector: "app-tickets",
  templateUrl: "./tickets.component.html",
  styleUrls: ["./tickets.component.css"]
})
export class TicketsComponent implements OnInit {
  tickets: Ticket[];
  constructor(private ticketService: TicketService) {}

  ngOnInit() {
    this.getTickets();
  }

  getTickets(): void {
    this.ticketService.getTickets().subscribe(tickets => {
      console.log(tickets);
      this.tickets = tickets;
    });
  }

  deleteTicket(ticket: Ticket): void {
    // console.log("ticket deleted!", ticket.id);
    this.ticketService
      .deleteTicket(ticket.id)
      .subscribe(result => this.getTickets());
  }
}
