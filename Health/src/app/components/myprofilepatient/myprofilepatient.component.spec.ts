import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyprofilepatientComponent } from './myprofilepatient.component';

describe('MyprofilepatientComponent', () => {
  let component: MyprofilepatientComponent;
  let fixture: ComponentFixture<MyprofilepatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyprofilepatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyprofilepatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
