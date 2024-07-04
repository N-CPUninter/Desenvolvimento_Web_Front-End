import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosComponent } from './usuarios.component';

describe('UsuariosComponent', () => {
  let component: UsuariosComponent;
  let fixture: ComponentFixture<UsuariosComponent>;

  afterAll(() =>{
    
  })

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuariosComponent]
    });
    fixture = TestBed.createComponent(UsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
