import { TestBed } from '@angular/core/testing';

import { MockspyService } from './mockspy.service';

describe('MockspyService', () => {
  let service: MockspyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockspyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
