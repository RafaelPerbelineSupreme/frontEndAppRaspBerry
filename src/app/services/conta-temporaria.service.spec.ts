import { TestBed } from '@angular/core/testing';

import { ContaTemporariaService } from './conta-temporaria.service';

describe('ContaTemporariaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContaTemporariaService = TestBed.get(ContaTemporariaService);
    expect(service).toBeTruthy();
  });
});
