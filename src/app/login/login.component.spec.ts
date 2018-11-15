import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatCardModule } from "@angular/material";
import { LoginComponent } from "./login.component";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { Router } from "@angular/router";

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule],
      declarations: [LoginComponent],
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
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
