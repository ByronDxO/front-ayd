import { TestBed } from '@angular/core/testing';

import { CubicaService } from './cubica.service';

describe('CubicaService', () => {
  let service: CubicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CubicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
