import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MundoComponent } from './mundo.component';

describe('MundoComponent', () => {
  let component: MundoComponent;
  let fixture: ComponentFixture<MundoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MundoComponent]
    });
    fixture = TestBed.createComponent(MundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
