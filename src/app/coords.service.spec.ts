import { TestBed } from "@angular/core/testing";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { CoordsService } from "./coords.service";

describe("CoordsService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({ providers: [HttpClient, HttpHandler] })
  );

  it("should be created", () => {
    const service: CoordsService = TestBed.get(CoordsService);
    expect(service).toBeTruthy();
  });
});
