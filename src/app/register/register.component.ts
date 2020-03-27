import { Component } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  validateForm: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: ['', [Validators.required], [this.checkDuplication]],
      password: ['', [Validators.required]],
      confirm: ['', [this.confirmValidator]],
      remember: [true]
    });
  }

  checkDuplication = (control: FormControl) => new Observable((observer: Observer<ValidationErrors | null>) => {
    if (control.value == 'ali') {
      // you have to return `{error: true}` to mark it as an error event
      observer.next({ error: true, duplicatedUser: true });
    }
    observer.complete();
    // alert(control.value);
  });

  /**
   * check two password equality
   */
  confirmValidator = (control: FormControl) => {
    // control.value if empty will return true so !true => false
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };
}