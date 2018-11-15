import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { SupportFormComponent } from "./support-form.component";
import {
  MatOptionModule,
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule
} from "@angular/material";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("SupportFormComponent", () => {
  let component: SupportFormComponent;
  let fixture: ComponentFixture<SupportFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatOptionModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      declarations: [SupportFormComponent],
      providers: [
        HttpClient,
        HttpHandler,
        {
          provide: Router,
          useClass: class {
            navigate = jasmine.createSpy("navigate");
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
