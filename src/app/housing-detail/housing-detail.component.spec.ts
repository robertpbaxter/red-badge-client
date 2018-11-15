import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import {
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatDialogModule
} from "@angular/material";
import { AgmCoreModule, MapsAPILoader } from "@agm/core";
import { RouterModule, ActivatedRoute } from "@angular/router";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { HousingDetailComponent } from "./housing-detail.component";

describe("HousingDetailComponent", () => {
  let component: HousingDetailComponent;
  let fixture: ComponentFixture<HousingDetailComponent>;
  const fakeActivatedRoute = {
    snapshot: { data: {} }
  } as ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AgmCoreModule,
        MatCardModule,
        MatDialogModule,
        MatIconModule,
        MatMenuModule
      ],
      declarations: [HousingDetailComponent],
      providers: [
        HttpClient,
        HttpHandler,
        RouterModule,
        {
          provide: MapsAPILoader,
          useValue: true
        },
        { provide: ActivatedRoute, useValue: fakeActivatedRoute }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
