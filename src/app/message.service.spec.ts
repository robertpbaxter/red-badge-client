import { TestBed } from "@angular/core/testing";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { MessageService } from "./message.service";

describe("MessageService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({ providers: [HttpClient, HttpHandler] })
  );

  it("should be created", () => {
    const service: MessageService = TestBed.get(MessageService);
    expect(service).toBeTruthy();
  });
});
