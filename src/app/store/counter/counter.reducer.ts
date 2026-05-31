import { createReducer, on } from "@ngrx/store";
import { initialState } from "./counter.state";
import { decrement, increment, incrementByValue } from "./counter.action";


export const counterReducer = createReducer(
    initialState,

     on(increment, (state) => ({
    ...state,
    count: state.count + 1
  })),

  on(decrement, (state) => ({
    ...state,
    count: state.count - 1
  })),

  on(incrementByValue, (state, {value}) => ({
    ...state,
    count: state.count + value
  }))
)