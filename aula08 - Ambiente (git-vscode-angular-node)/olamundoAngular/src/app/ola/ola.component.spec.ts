import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlaComponent } from './ola.component';

describe('OlaComponent', () => {
  let component: OlaComponent;
  let fixture: ComponentFixture<OlaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OlaComponent]
    });
    fixture = TestBed.createComponent(OlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
