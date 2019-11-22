import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpupdComponent } from './empupd.component';

describe('EmpupdComponent', () => {
  let component: EmpupdComponent;
  let fixture: ComponentFixture<EmpupdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpupdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpupdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
