import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TESTEComponent } from './teste.component';

describe('TESTEComponent', () => {
  let component: TESTEComponent;
  let fixture: ComponentFixture<TESTEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TESTEComponent]
    });
    fixture = TestBed.createComponent(TESTEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
