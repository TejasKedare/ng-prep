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
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.min(18)]],
      isEmployee: [false]
    })

    this.addValidationBasedOnIsEmployed()
  }

  submitForm() {
    if (!this.userForm.valid) {
      this.userForm.markAllAsTouched()      
      const err = this.findErrors() 
      console.log("This is error submitting the form", err)
      return
    }

    console.log('User From : ', this.userForm.value)
  }

  findErrors() {
    let invalidFields = []
    const controls = this.userForm.controls

    for(let name in controls) {
      if (controls[name].invalid) {
        invalidFields.push({
          name: name,
          errors: controls[name].errors
        })
      }
    }

    return invalidFields
  }

  loadData() {
    this.userForm.patchValue({
      name: 'New name',
      email: 'new@yopmail.com'
    })
  }

  addValidators() {
    let name = this.userForm.get('name')
    name?.addValidators([Validators.minLength(3)]) // keep the existing validators and update
    name?.setValidators([Validators.minLength(3)]) // remove the existing validators and update
    name?.removeValidators([Validators.required]); // this is to remove specific validator
    name?.clearValidators(); // this is to clear all validators

    name?.updateValueAndValidity() // this is required in all update and delete part to refresh validators
  }

  addValidationBasedOnIsEmployed() {
    const age = this.userForm.get('age')
    this.userForm.get('isEmployee')?.valueChanges.subscribe((value) => {
      if (value) {
        age?.addValidators([Validators.max(99)])
      } else {
        age?.clearValidators()
      }

      age?.updateValueAndValidity()
    })
  }

} 