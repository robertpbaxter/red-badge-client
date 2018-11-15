import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MapDetailsComponent } from "./map-details.component";
import { AgmCoreModule, MapsAPILoader } from "@agm/core";
import { HttpClient, HttpHandler } from "@angular/common/http";

describe("MapDetailsComponent", () => {
  let component: MapDetailsComponent;
  let fixture: ComponentFixture<MapDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AgmCoreModule],
      declarations: [MapDetailsComponent],
      providers: [
        HttpClient,
        HttpHandler,
        {
          provide: MapsAPILoader,
          useValue: true
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
