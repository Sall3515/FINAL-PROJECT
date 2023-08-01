import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  NonNullableFormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerInfo = this.formbuilder.group({
    firstName: [
      '',
      [Validators.required, Validators.pattern(/^[a-zA-Z]{2,}$/)],
    ],
    lastName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]{2,}$/)]],
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.required,
        Validators.pattern(/^(?=.*[a-zA-Z0-9])(?=.*[!.#$%^&,]).{8,}$/),
      ],
    ],
    confirmPassword: ['', [Validators.required]],
    previousJobs: this.formbuilder.array([this.formbuilder.control('')]),
  });

  constructor(
    private formbuilder: NonNullableFormBuilder, //formBuilder-შევცვალოთ
    public themeService: ThemeService
  ) {
    this.controls['confirmPassword'].setValidators(
      this.confirmPasswordValidator(this.controls.password)
    );
  }

  get controls() {
    return this.registerInfo.controls;
  }

  get previousJobs() {
    return this.registerInfo.controls['previousJobs'];
  }

  onSignUp() {
    console.log(this.registerInfo.value);
    this.registerInfo.reset();
    console.log(this.registerInfo.value);
    // ყველა მნიშვნელობა ხდება null, ამის თავიდან ასაცილებლად გამოვიყენოთ nonNullableFormBuilder
  }

  addPreviousJobs() {
    this.previousJobs.push(this.formbuilder.control('')); //formArray-ს bult-in მეთოდია აქ push
    console.log(this.previousJobs.value);
  }

  deleteJobs() {
    // submit -ის შემდეგ  სამუშაოს ფორმის ველების მოშორება.

    const length = this.previousJobs.length;
    if (length > 0) {
      for (let i = 1; i < length; i++) {
        this.previousJobs.removeAt(length - i);
        // console.log(this.previousJobs.value);
      }
      this.previousJobs.reset(); //ბოლო  დარჩენილი მნიშვნელობა  დარესეტდება.
    }
  }

  confirmPasswordValidator(compareTo: AbstractControl): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value !== compareTo.value) {
        return { confirmPassword: 'Passwords do not match!' };
      }
      return null;
    };
  }
}
