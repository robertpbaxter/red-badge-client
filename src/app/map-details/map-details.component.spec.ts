import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MapDetailsComponent } from "./map-details.component";
import { AgmCoreModule, MapsAPILoader } from "@agm/core";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { Component } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";

@Component({
  template: `
    <a routerLink="/detail/{{housing?.id}}">more details</a>
  `
})
class TestComponent {
  housing = { id: 1 };
}

@Component({ template: "" })
class DummyComponent {}

describe("MapDetailsComponent", () => {
  let component: MapDetailsComponent;
  let fixture: ComponentFixture<MapDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AgmCoreModule,
        RouterTestingModule.withRoutes([
          { path: "", component: DummyComponent }
        ])
      ],
      declarations: [MapDetailsComponent, DummyComponent],
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
