import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportedHousingComponent } from './reported-housing.component';

describe('ReportedHousingComponent', () => {
  let component: ReportedHousingComponent;
  let fixture: ComponentFixture<ReportedHousingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportedHousingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportedHousingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
