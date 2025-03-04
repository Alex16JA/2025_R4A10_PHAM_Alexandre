import { TestBed } from '@angular/core/testing';

import { BooksApiService } from './book-api.service';

describe('BookApiService', () => {
  let service: BooksApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
