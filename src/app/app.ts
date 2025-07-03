import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { JobSubmissionForm } from "./job-submission-form/job-submission-form";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, JobSubmissionForm],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {
  protected title = "job-application-form-app";
}
