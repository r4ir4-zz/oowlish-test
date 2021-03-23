import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { HtmlService } from './html.service';

describe('HtmlService', () => {
  let service: HtmlService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(HtmlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
