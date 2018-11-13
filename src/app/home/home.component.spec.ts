import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { Component, Directive, Input } from "@angular/core";
import { HomeComponent } from "./home.component";
import { MatTableModule, MatSortModule } from "@angular/material";
import { RouterLink } from "@angular/router";
import { HttpClient, HttpHandler } from "@angular/common/http";

@Component({ selector: "app-map", template: "" })
class MapStubComponent {}

@Directive({ selector: "[routerLink]", host: { "(click)": "onClick()" } })
export class RouterLinkDirectiveStub {
  @Input("routerLink") linkParams: any;
  navigatedTo: any = null;
  onclick() {
    this.navigatedTo = this.linkParams;
  }
}

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatTableModule, MatSortModule, RouterLink],
      providers: [HttpClient, HttpHandler],
      declarations: [HomeComponent, MapStubComponent, RouterLinkDirectiveStub]
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
