import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { UserSettingsComponent } from "./user-settings.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClient, HttpHandler } from "@angular/common/http";
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatInputModule
} from "@angular/material";

describe("UserSettingsComponent", () => {
  let component: UserSettingsComponent;
  let fixture: ComponentFixture<UserSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [MatDialogModule, MatInputModule],
      declarations: [UserSettingsComponent],
      providers: [
        HttpClient,
        HttpHandler,
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
