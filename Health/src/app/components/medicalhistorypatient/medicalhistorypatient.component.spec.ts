import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalhistorypatientComponent } from './medicalhistorypatient.component';

describe('MedicalhistorypatientComponent', () => {
  let component: MedicalhistorypatientComponent;
  let fixture: ComponentFixture<MedicalhistorypatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalhistorypatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalhistorypatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
