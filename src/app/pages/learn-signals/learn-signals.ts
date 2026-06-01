import { Component, computed, effect, OnInit, signal } from '@angular/core';

interface User {
  id: number,
  name: string,
  age: number,
  city: string
}

@Component({
  selector: 'app-learn-signals',
  imports: [],
  templateUrl: './learn-signals.html',
  styleUrl: './learn-signals.scss',
})


export class LearnSignals implements OnInit {

  user = signal<User>({
    id: 1,
    name: 'Tejas',
    age: 29,
    city: 'kalyan'
  })

  constructor() {
      effect(() => {
      console.log('change in signal', this.user());
    })
  }

  ngOnInit(): void {}

  userInfo = computed(() => {
    `this is user's current city ${this.user().city} and this is users age ${this.user().age}`
  })

  changeUser(){
    this.user.set({
      id: 2,
      name: 'New user',
      age: 500,
      city: 'New York'
    })
  }

  setValue(value: any) {
    this.user.set(value)
  }

  incrementAge() {
    this.user.update(user => ({
      ...user,
      age: user.age + 1
    }))
  }

  changeCity() {
    this.user.update((user) => ({
      ...user,
      city: 'Nashik'
    }))
  }
}
