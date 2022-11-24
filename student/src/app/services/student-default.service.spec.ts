import { TestBed } from '@angular/core/testing';

import { StudentDefaultService } from './student-default.service';

describe('StudentDefaultService', () => {
  let service: StudentDefaultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentDefaultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
