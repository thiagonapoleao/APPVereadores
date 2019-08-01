import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaPaginaPage } from './nova-pagina.page';

describe('NovaPaginaPage', () => {
  let component: NovaPaginaPage;
  let fixture: ComponentFixture<NovaPaginaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaPaginaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaPaginaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
