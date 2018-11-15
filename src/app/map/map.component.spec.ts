import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { AgmCoreModule, MapsAPILoader } from "@agm/core";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { MapComponent } from "./map.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("MapComponent", () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [AgmCoreModule],
      declarations: [MapComponent],
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
    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
