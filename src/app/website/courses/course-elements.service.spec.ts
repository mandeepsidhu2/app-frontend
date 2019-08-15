import { TestBed } from '@angular/core/testing';

import { CourseElementsService } from './course-elements.service';

describe('CourseElementsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseElementsService = TestBed.get(CourseElementsService);
    expect(service).toBeTruthy();
  });
});
