import { TestBed } from "@angular/core/testing";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { TicketService } from "./ticket.service";

describe("TicketService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({ providers: [HttpClient, HttpHandler] })
  );

  it("should be created", () => {
    const service: TicketService = TestBed.get(TicketService);
    expect(service).toBeTruthy();
  });
});
