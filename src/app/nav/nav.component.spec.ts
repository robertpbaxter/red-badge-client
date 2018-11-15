import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import {
  MatToolbarModule,
  MatMenuModule,
  MatBadgeModule
} from "@angular/material";
import { RouterLink } from "@angular/router";
import { NavComponent } from "./nav.component";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { Directive, Input } from "@angular/core";

@Directive({ selector: "[routerLink]", host: { "(click)": "onClick()" } })
export class RouterLinkDirectiveStub {
  @Input("routerLink") linkParams: any;
  navigatedTo: any = null;
  onclick() {
    this.navigatedTo = this.linkParams;
  }
}

describe("NavComponent", () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatToolbarModule, RouterLink, MatMenuModule, MatBadgeModule],
      declarations: [NavComponent, RouterLinkDirectiveStub],
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
