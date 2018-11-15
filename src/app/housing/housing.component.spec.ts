import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import {
  MatCardModule,
  MatExpansionModule,
  MatMenuModule,
  MatIconModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule,
  MatDialogModule
} from "@angular/material";
import { AgmCoreModule, MapsAPILoader } from "@agm/core";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { HousingComponent } from "./housing.component";
import { Component } from "@angular/core";

@Component({ selector: "app-mini-map", template: "" })
class MiniMapStubComponent {}

describe("HousingComponent", () => {
  let component: HousingComponent;
  let fixture: ComponentFixture<HousingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AgmCoreModule,
        MatCardModule,
        MatDialogModule,
        MatSelectModule,
        MatExpansionModule,
        MatOptionModule,
        MatFormFieldModule,
        MatIconModule,
        MatMenuModule
      ],
      declarations: [HousingComponent, MiniMapStubComponent],
      providers: [
        HttpClient,
        HttpHandler,
        { provide: MapsAPILoader, useValue: true }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
