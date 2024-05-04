import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProveedorLoginPage } from './proveedor-login.page';

describe('ProveedorLoginPage', () => {
  let component: ProveedorLoginPage;
  let fixture: ComponentFixture<ProveedorLoginPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedorLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
