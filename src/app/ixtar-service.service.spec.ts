import { TestBed } from '@angular/core/testing';

import { IxtarServiceService } from './ixtar-service.service';

describe('IxtarServiceService', () => {
  let service: IxtarServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IxtarServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
