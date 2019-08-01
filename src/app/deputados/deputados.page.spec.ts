import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeputadosPage } from './deputados.page';

describe('DeputadosPage', () => {
  let component: DeputadosPage;
  let fixture: ComponentFixture<DeputadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeputadosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeputadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
