import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.scss',
})
export class ReactiveForm implements OnInit {

  userForm!: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initializeForm()
  }

  initializeForm() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(18)]],
      isEmployee: [false]
    })
  }

  loadData() {
    this.userForm.patchValue({
      name: 'Tejas',
      age: 29
    })
  }

  submitForm() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched()
      console.log('form has errors')
      return
    }

    console.log(this.userForm.value);
  }

  addValidators() {
    let name = this.userForm.get('name')
    name?.addValidators([Validators.minLength(3)]) // keep the existing validators and update
    name?.setValidators([Validators.minLength(3)]) // remove the existing validators and update
    name?.removeValidators([Validators.required]); // this is to remove specific validator
    name?.clearValidators(); // this is to clear all validators

    name?.updateValueAndValidity() // this is required in all update and delete part to refresh validators
  }

  dynamicValidation() {
    this.userForm.get('isEmployee')?.valueChanges.subscribe((value) => {
      const age = this.userForm.get('age')
      if (value) {
        console.log('in if');
        age?.setValidators([Validators.max(99)])
        //  age?.markAllAsTouched()
      } else {
        console.log('in else');
        age?.clearValidators();
      }
      age?.updateValueAndValidity()

    })
  }

} 