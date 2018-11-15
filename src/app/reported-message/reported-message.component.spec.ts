import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ReportedMessageComponent } from "./reported-message.component";
import { MatListModule } from "@angular/material";
import { HttpClient, HttpHandler } from "@angular/common/http";

describe("ReportedMessageComponent", () => {
  let component: ReportedMessageComponent;
  let fixture: ComponentFixture<ReportedMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatListModule],
      declarations: [ReportedMessageComponent],
      providers: [HttpClient, HttpHandler]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportedMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
