import { TestBed } from '@angular/core/testing';

import { DadosAbertosService } from './dados-abertos.service';

describe('DadosAbertosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DadosAbertosService = TestBed.get(DadosAbertosService);
    expect(service).toBeTruthy();
  });
});
