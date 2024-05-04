import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClienteLoginPage } from './cliente-login.page';

describe('ClienteLoginPage', () => {
  let component: ClienteLoginPage;
  let fixture: ComponentFixture<ClienteLoginPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
