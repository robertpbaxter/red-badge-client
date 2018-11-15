import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { AgmCoreModule, MapsAPILoader } from "@agm/core";
import { MapEntryComponent } from "./map-entry.component";
import { HttpClient, HttpHandler } from "@angular/common/http";

describe("MapEntryComponent", () => {
  let component: MapEntryComponent;
  let fixture: ComponentFixture<MapEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AgmCoreModule],
      declarations: [MapEntryComponent],
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
    fixture = TestBed.createComponent(MapEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
