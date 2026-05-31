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

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeForm()
  }

  initializeForm() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      age:['', [Validators.required, Validators.min(18)]]
    })
  }

  loadData() {
    this.userForm.patchValue({
      name:'Tejas',
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
} 