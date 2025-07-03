import { Routes } from "@angular/router";
import { JobSubmissionForm } from "./job-submission-form/job-submission-form";
import { JobApplicationSubmit } from "./job-application-submit/job-application-submit";

export const routes: Routes = [
  {
    path: "",
    component: JobSubmissionForm,
  },
  {
    path: "submit",
    component: JobApplicationSubmit,
  },
];
