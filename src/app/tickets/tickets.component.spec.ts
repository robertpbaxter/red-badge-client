import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { TicketsComponent } from "./tickets.component";
import { MatCardModule, MatExpansionModule } from "@angular/material";
import { Component, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClient, HttpHandler } from "@angular/common/http";

@Component({ selector: "app-user", template: "" })
class UserStubComponent {}

describe("TicketsComponent", () => {
  let component: TicketsComponent;
  let fixture: ComponentFixture<TicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [MatCardModule, MatExpansionModule],
      declarations: [TicketsComponent, UserStubComponent],
      providers: [HttpClient, HttpHandler]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
