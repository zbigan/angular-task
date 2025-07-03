import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";

@Component({
  selector: "app-job-submission-form",
  imports: [
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: "./job-submission-form.html",
  styleUrl: "./job-submission-form.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobSubmissionForm {
  firstName = new FormControl("", [Validators.required]);
  lastName = new FormControl("", [Validators.required]);
  email = new FormControl("", [Validators.required, Validators.email]);
  isLookingForJob = new FormControl(true);
  specLevel = new FormControl(null, [Validators.required]);
  twoPlusTwo = new FormControl(null);
  description = new FormControl("");

  specLevels = [
    { value: "junior", viewValue: "Junior" },
    { value: "mid", viewValue: "Mid" },
    { value: "senior", viewValue: "Senior" },
  ];

  constructor() {
    this.specLevel.valueChanges.subscribe((value) => {
      if (value === "junior") {
        this.twoPlusTwo.setValidators([
          Validators.required,
          Validators.pattern(/^4$/),
        ]);
        this.description.clearValidators();
        this.description.reset();
      } else if (value === "mid") {
        this.description.setValidators([
          Validators.required,
          Validators.pattern(/^[^aA]*$/),
        ]);
        this.twoPlusTwo.clearValidators();
        this.twoPlusTwo.reset();
      } else {
        // senior
        this.twoPlusTwo.clearValidators();
        this.twoPlusTwo.reset();
        this.description.clearValidators();
        this.description.reset();
      }

      this.twoPlusTwo.updateValueAndValidity();
      this.description.updateValueAndValidity();
    });
  }
}
