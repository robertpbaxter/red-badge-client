import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ReportedHousingComponent } from "./reported-housing.component";
import { MatListModule } from "@angular/material";
import { HttpClient, HttpHandler } from "@angular/common/http";

describe("ReportedHousingComponent", () => {
  let component: ReportedHousingComponent;
  let fixture: ComponentFixture<ReportedHousingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatListModule],
      declarations: [ReportedHousingComponent],
      providers: [HttpClient, HttpHandler]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportedHousingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
