import { combineReducers, Reducer } from 'redux'
import { TodoSlice, uiSliceI } from '../models/InitialState.model'
import { todoSlice } from './slices/todoSlice'
import { uiSlice } from './slices/uiSlice'

export interface reducersCombined {
  todoSlice: Reducer<TodoSlice>
  uiSlices: Reducer<uiSliceI>
}

export interface reducers {
  todoSlice: TodoSlice,
  uiSlices: uiSliceI
}

const reducers:reducersCombined = {
  todoSlice: todoSlice.reducer,
  uiSlices: uiSlice.reducer
}

export const rootReducers = combineReducers(reducers)