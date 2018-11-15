import { TestBed } from "@angular/core/testing";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { HousingService } from "./housing.service";

describe("HousingService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({ providers: [HttpClient, HttpHandler] })
  );

  it("should be created", () => {
    const service: HousingService = TestBed.get(HousingService);
    expect(service).toBeTruthy();
  });
});
