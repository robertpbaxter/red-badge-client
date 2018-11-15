import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { AgmCoreModule, MapsAPILoader } from "@agm/core";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { UpdateHousingComponent } from "./update-housing.component";
import {
  MatOptionModule,
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("UpdateHousingComponent", () => {
  let component: UpdateHousingComponent;
  let fixture: ComponentFixture<UpdateHousingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        AgmCoreModule,
        MatSelectModule,
        MatOptionModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      declarations: [UpdateHousingComponent],
      providers: [
        HttpClient,
        HttpHandler,
        {
          provide: MapsAPILoader,
          useValue: true
        },
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHousingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
