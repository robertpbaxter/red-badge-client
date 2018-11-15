import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MiniMapComponent } from "./mini-map.component";
import { AgmCoreModule } from "@agm/core";
import { HttpClient, HttpHandler } from "@angular/common/http";

describe("MiniMapComponent", () => {
  let component: MiniMapComponent;
  let fixture: ComponentFixture<MiniMapComponent>;
  let MapsAPILoader;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AgmCoreModule],
      declarations: [MiniMapComponent],
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
    fixture = TestBed.createComponent(MiniMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
