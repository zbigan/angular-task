import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: "app-job-application-submit",
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: "./job-application-submit.html",
})
export class JobApplicationSubmit {
  isLookingForJob = history.state?.isLookingForJob ?? true;
  formData = {
    firstName: history.state?.firstName ?? "",
    lastName: history.state?.lastName ?? "",
    email: history.state?.email ?? "",
    specLevel: history.state?.specLevel ?? "",
  };

  motivation = new FormControl("", [
    Validators.required,
    Validators.minLength(140),
  ]);

  submitted = false;
  submissionResult: any = null;

  onSubmit() {
    if (!this.isLookingForJob && this.motivation.invalid) return;

    this.submissionResult = {
      ...this.formData,
      isLookingForJob: this.isLookingForJob,
      ...(this.isLookingForJob
        ? { message: "Aplikacija pateikta" }
        : { motivation: this.motivation.value }),
    };

    this.submitted = true;
  }
}
