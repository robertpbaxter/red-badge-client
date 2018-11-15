import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { ReportComponent } from "./report.component";
import {
  MatOptionModule,
  MatSelectModule,
  MatFormFieldModule,
  MatDialogRef,
  MatDialogModule,
  MAT_DIALOG_DATA,
  MatInputModule
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("ReportComponent", () => {
  let component: ReportComponent;
  let fixture: ComponentFixture<ReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatOptionModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        BrowserAnimationsModule
      ],
      declarations: [ReportComponent],
      providers: [
        HttpClient,
        HttpHandler,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
