import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearAvisoProvePage } from './crear-aviso-prove.page';

describe('CrearAvisoProvePage', () => {
  let component: CrearAvisoProvePage;
  let fixture: ComponentFixture<CrearAvisoProvePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAvisoProvePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
