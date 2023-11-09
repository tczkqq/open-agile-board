import { TestBed } from '@angular/core/testing';

import { BoardMngmtService } from './board-mngmt.service';

describe('BoardMngmtService', () => {
  let service: BoardMngmtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardMngmtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
