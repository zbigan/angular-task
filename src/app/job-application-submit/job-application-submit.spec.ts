import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApplicationSubmit } from './job-application-submit';

describe('JobApplicationSubmit', () => {
  let component: JobApplicationSubmit;
  let fixture: ComponentFixture<JobApplicationSubmit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobApplicationSubmit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobApplicationSubmit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
