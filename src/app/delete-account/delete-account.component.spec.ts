import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material";
import { DeleteAccountComponent } from "./delete-account.component";
import { HttpClient, HttpHandler } from "@angular/common/http";

describe("DeleteAccountComponent", () => {
  const mockDialogRef = { confirm: jasmine.createSpy("confirm") };
  let component: DeleteAccountComponent;
  let fixture: ComponentFixture<DeleteAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [DeleteAccountComponent],
      providers: [
        HttpClient,
        HttpHandler,
        { provide: MatDialogRef, useValue: mockDialogRef },
        MAT_DIALOG_DATA
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
