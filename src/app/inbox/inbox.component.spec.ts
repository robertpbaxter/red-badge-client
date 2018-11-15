import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import {
  MatExpansionModule,
  MatIconModule,
  MatMenuModule,
  MatDialog
} from "@angular/material";
import { InboxComponent } from "./inbox.component";
import { Component, NO_ERRORS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClient, HttpHandler } from "@angular/common/http";

@Component({ selector: "app-user", template: "" })
class UserStubComponent {}

describe("InboxComponent", () => {
  let component: InboxComponent;
  let fixture: ComponentFixture<InboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [MatExpansionModule, MatIconModule, MatMenuModule, FormsModule],
      declarations: [InboxComponent, UserStubComponent],
      providers: [HttpClient, HttpHandler, { provide: MatDialog, useValue: {} }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
