import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CounterActions from "../../store/counter/counter.action";

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  constructor(private store: Store) {}

  increment() {
    this.store.dispatch(
      CounterActions.increment()
    )
  }

  decrement() {
    this.store.dispatch(
      CounterActions.decrement()
    )
  }

  incrementByValue(value: number) {
    this.store.dispatch(
      CounterActions.incrementByValue({value: value})
    )
  }
} 
