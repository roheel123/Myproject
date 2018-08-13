import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DfeedbackComponent } from './dfeedback.component';

describe('DfeedbackComponent', () => {
  let component: DfeedbackComponent;
  let fixture: ComponentFixture<DfeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DfeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
