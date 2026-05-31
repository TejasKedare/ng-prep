import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";


const counterSelector = createFeatureSelector<CounterState>('counter')

export const selectorCount = createSelector(counterSelector, (state) => state.count)