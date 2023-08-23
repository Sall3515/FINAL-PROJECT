import { Component } from '@angular/core';
import {
  AbstractControl,
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
        Validators.pattern(/^(?=.*[a-zA-Z0-9])(?=.*[!.#$%^&,]).{8,}$/), //(?=) checks if the string contains at least one  character  from ([a-zA-Z0-9],[!.#$%^&,])
      ],
    ],
    confirmPassword: ['', [Validators.required]],
    favouriteFruit: this.formbuilder.array([this.formbuilder.control('')]),
  });

  constructor(
    private formbuilder: NonNullableFormBuilder, //formBuilder-შევცვალოთ
    public themeService: ThemeService
  ) {
    this.controls['confirmPassword'].setValidators(
      //this.controls['confirmPassword'] =>having access to  the "confirmPassword"
      this.confirmPasswordValidator(this.controls.password)
    );
  }

  get controls() {
    return this.registerInfo.controls;
  }

  get fruit() {
    return this.registerInfo.controls['favouriteFruit'];
  }

  onSignUp() {
    console.log(this.registerInfo.value);
    this.registerInfo.reset();
    console.log(this.registerInfo.value);
    // ყველა მნიშვნელობა ხდება null, ამის თავიდან ასაცილებლად გამოვიყენოთ nonNullableFormBuilder
  }

  addFruit() {
    this.fruit.push(this.formbuilder.control('')); //formArray-ს bult-in მეთოდია აქ push
    console.log(this.fruit.value);
  }

  deleteFruit() {
    // submit -ის შემდეგ  სამუშაოს ფორმის ველების მოშორება.

    const length = this.fruit.length;
    if (length > 0) {
      for (let i = 1; i < length; i++) {
        this.fruit.removeAt(length - i);
        // console.log(this.previousJobs.value);
      }
      this.fruit.reset(); //ბოლო  დარჩენილი მნიშვნელობა  დარესეტდება.
    }
  }

  //custom validator
  confirmPasswordValidator(compare: AbstractControl): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      //control is a confirm password input
      if (control.value !== compare.value) {
        //compare is a password input
        //control-ის ის ინსტანცია,რომელზეც ვალიდატორი  არის დაყენებული
        return { confirmPassword: 'Passwords do not match!' };
      }
      return null;
    };
  }
}
