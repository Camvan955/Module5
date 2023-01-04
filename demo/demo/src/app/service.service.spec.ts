import { TestBed } from '@angular/core/testing';

import { PhongTroService } from './service.service';

describe('ServiceService', () => {
  let service: PhongTroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhongTroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
