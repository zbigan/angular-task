import { ChangeDetectionStrategy, Component } from "@angular/core";
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { Router } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: "app-job-submission-form",
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
  ],
  templateUrl: "./job-submission-form.html",
  styleUrl: "./job-submission-form.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobSubmissionForm {
  form = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    isLookingForJob: new FormControl(true),
    specLevel: new FormControl(null, Validators.required),
    twoPlusTwo: new FormControl(null),
    description: new FormControl(""),
  });

  get firstName() {
    return this.form.get("firstName") as FormControl<string>;
  }
  get lastName() {
    return this.form.get("lastName") as FormControl<string>;
  }

  get email() {
    return this.form.get("email") as FormControl<string>;
  }

  get isLookingForJob() {
    return this.form.get("isLookingForJob") as FormControl<boolean>;
  }

  get specLevel() {
    return this.form.get("specLevel") as FormControl<string | null>;
  }

  get twoPlusTwo() {
    return this.form.get("twoPlusTwo") as FormControl<string | null>;
  }

  get description() {
    return this.form.get("description") as FormControl<string>;
  }

  specLevels = [
    { value: "junior", viewValue: "Junior" },
    { value: "mid", viewValue: "Mid" },
    { value: "senior", viewValue: "Senior" },
  ];

  constructor(private router: Router) {
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
        this.twoPlusTwo.clearValidators();
        this.twoPlusTwo.reset();
        this.description.clearValidators();
        this.description.reset();
      }

      this.twoPlusTwo.updateValueAndValidity();
      this.description.updateValueAndValidity();
    });
  }

  onNextStep() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.router.navigate(["/submit"], {
      state: {
        isLookingForJob: this.isLookingForJob.value,
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        email: this.email.value,
        specLevel: this.specLevel.value,
      },
    });
  }
}
