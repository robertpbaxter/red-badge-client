import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import {
  MatToolbarModule,
  MatMenuModule,
  MatBadgeModule
} from "@angular/material";
import { NavComponent } from "./nav.component";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";
import { Component } from "@angular/core";

@Component({ template: "" })
class DummyComponent {}

describe("NavComponent", () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatToolbarModule,
        MatMenuModule,
        MatBadgeModule,
        RouterTestingModule.withRoutes([
          { path: "", component: DummyComponent }
        ])
      ],
      declarations: [NavComponent, DummyComponent],
      providers: [HttpClient, HttpHandler]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
