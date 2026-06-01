import { Component, OnInit, } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-array',
  imports: [ReactiveFormsModule],
  templateUrl: './form-array.html',
  styleUrl: './form-array.scss',
})
export class FormArrayPrep implements OnInit {

  skillsForm!: FormGroup

  constructor(private fb: FormBuilder) { 
    this.initializeForm()
  }

  ngOnInit() {
    
  }

  initializeForm() {
    this.skillsForm = this.fb.group({
      skills: this.fb.array([this.createSkill()])
    })
  }

  createSkill() {
    return this.fb.control('', [Validators.required])
  }

  get skills(): FormArray {
    return this.skillsForm.get('skills') as FormArray
  }

  addSkills() {
    this.skills?.push(this.createSkill())
  }

  removeSkills(index: number) {
    this.skills.removeAt(index)
  }

  updateSkills(index: number) {
    this.skills.at(index).setValue("Angular")
  }

  submitSkillForm() {
    if (!this.skillsForm.valid) {
      this.skillsForm.markAllAsTouched()
      return
    }

    console.log(this.skillsForm.value)
  }
}