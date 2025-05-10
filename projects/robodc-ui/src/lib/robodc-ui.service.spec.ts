import { TestBed } from '@angular/core/testing';

import { RobodcUiService } from './robodc-ui.service';

describe('RobodcUiService', () => {
  let service: RobodcUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RobodcUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
