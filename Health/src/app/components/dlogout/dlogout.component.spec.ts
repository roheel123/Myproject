import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DlogoutComponent } from './dlogout.component';

describe('DlogoutComponent', () => {
  let component: DlogoutComponent;
  let fixture: ComponentFixture<DlogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
