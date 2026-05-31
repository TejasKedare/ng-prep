import { createAction, props } from "@ngrx/store";


const increment = createAction(
    '[Counter] Increment'
)

const decrement = createAction(
    '[Counter] Decrement'
)

const incrementByValue = createAction(
    '[Counter] Increment By Value',
    props<{value: number}>()
)

export { increment, decrement, incrementByValue }