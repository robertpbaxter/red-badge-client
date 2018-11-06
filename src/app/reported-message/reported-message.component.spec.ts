import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportedMessageComponent } from './reported-message.component';

describe('ReportedMessageComponent', () => {
  let component: ReportedMessageComponent;
  let fixture: ComponentFixture<ReportedMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportedMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportedMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
