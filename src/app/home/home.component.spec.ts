import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { Component } from "@angular/core";
import { HomeComponent } from "./home.component";
import { MatTableModule, MatSortModule } from "@angular/material";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@Component({ selector: "app-map", template: "" })
class MapStubComponent {}

@Component({ template: "" })
class DummyComponent {}

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatTableModule,
        MatSortModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes([
          { path: "", component: DummyComponent }
        ])
      ],
      providers: [HttpClient, HttpHandler],
      declarations: [HomeComponent, MapStubComponent, DummyComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
