import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material";
import { DeleteAccountComponent } from "./delete-account.component";
import { HttpClient, HttpHandler } from "@angular/common/http";

describe("DeleteAccountComponent", () => {
  let component: DeleteAccountComponent;
  let fixture: ComponentFixture<DeleteAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [DeleteAccountComponent],
      providers: [
        HttpClient,
        HttpHandler,
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
