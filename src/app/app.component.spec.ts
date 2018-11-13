import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { Component } from "@angular/core";

@Component({ selector: "app-nav", template: "" })
class NavStubComponent {}

@Component({ selector: "app-footer", template: "" })
class FooterStubComponent {}

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, NavStubComponent, FooterStubComponent]
    }).compileComponents();
  }));

  it("should create the app", async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});

// import { NavComponent } from "./nav/nav.component";
// import { FooterComponent } from "./footer/footer.component";

// describe("AppComponent", () => {
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [RouterTestingModule],
//       declarations: [AppComponent, NavComponent, FooterComponent]
//     }).compileComponents();
//   }));

//   it("should create the app", () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app).toBeTruthy();
//   });
// });
