import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseElementsComponent } from './course-elements.component';

describe('CourseElementsComponent', () => {
  let component: CourseElementsComponent;
  let fixture: ComponentFixture<CourseElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
