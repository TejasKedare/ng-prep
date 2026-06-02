import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './form-array.html',
  styleUrl: './form-array.scss',
})
export class FormArrayPrep implements OnInit {

  skillsForm!: FormGroup

  constructor(private fb: FormBuilder) { 
    this.initializeForm()
  }

  ngOnInit(): void {

  }

  initializeForm() {
    this.skillsForm = this.fb.group({
      skills: this.fb.array([this.createSkill()])
    })
  }

  createSkill() {
    return this.fb.control('', Validators.required)
  }

  get skills(): FormArray {
    return this.skillsForm.get('skills') as FormArray
  }

  addSkills() {
    this.skills.push(this.createSkill())
  }

  removeSkills(index: number) {
    this.skills.removeAt(index)
  }

  updateSkills(index: number) {
    this.skills.at(index).setValue('Angular')
  }

  submitForm() {
    if (this.skillsForm.invalid) {
      this.skillsForm.markAllAsTouched()
      console.log("Error while submitting the form : ", this.findErrorFields())
      return
    }

    console.log('Sill Form : ', this.skillsForm.value)
  }

  findErrorFields() {
    let invalidFields = []
    const control = this.skills.controls
    for( let name in control) {
      if (control[name].invalid) {
        invalidFields.push({
          name: name,
          errors: control[name].errors
        })
      }
    }

    return invalidFields
  }
}