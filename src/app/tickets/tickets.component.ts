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
      this.tickets = tickets.sort((a, b) => {
        let idA = a.id;
        let idB = b.id;
        if (idA < idB) {
          return -1;
        }
        if (idA > idB) {
          return 1;
        }
      });
    });
  }

  updateTicket(status: string, id: number): void {
    this.ticketService
      .updateTicket({ status, id } as Ticket)
      .subscribe(results => this.getTickets());
  }

  deleteTicket(ticket: Ticket): void {
    this.ticketService
      .deleteTicket(ticket.id)
      .subscribe(result => this.getTickets());
  }
}
