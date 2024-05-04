import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvisosDeClientesPage } from './avisos-de-clientes.page';

describe('AvisosDeClientesPage', () => {
  let component: AvisosDeClientesPage;
  let fixture: ComponentFixture<AvisosDeClientesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisosDeClientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
