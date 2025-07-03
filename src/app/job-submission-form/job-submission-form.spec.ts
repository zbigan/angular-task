import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSubmissionForm } from './job-submission-form';

describe('JobSubmissionForm', () => {
  let component: JobSubmissionForm;
  let fixture: ComponentFixture<JobSubmissionForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobSubmissionForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobSubmissionForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
