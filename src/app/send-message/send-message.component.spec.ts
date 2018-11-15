import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { SendMessageComponent } from "./send-message.component";
import {
  MatFormFieldModule,
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatInputModule
} from "@angular/material";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("SendMessageComponent", () => {
  let component: SendMessageComponent;
  let fixture: ComponentFixture<SendMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        BrowserAnimationsModule
      ],
      declarations: [SendMessageComponent],
      providers: [
        HttpClient,
        HttpHandler,
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
