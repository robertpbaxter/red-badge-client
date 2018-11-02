import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHousingComponent } from './update-housing.component';

describe('UpdateHousingComponent', () => {
  let component: UpdateHousingComponent;
  let fixture: ComponentFixture<UpdateHousingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateHousingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHousingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
