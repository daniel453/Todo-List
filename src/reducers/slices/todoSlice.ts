import { createSlice } from '@reduxjs/toolkit'
import { todo, TodoSlice } from '../../models/InitialState.model'

const initialTodos:string = '[{"todo":"Aprender React","description":"Aprender React y testing en React","priority":"Hight","completed":false},{"todo":"Aprender Angular","description":"Aprender Angulary testing en Angular","priority":"Hight","completed":false},{"todo":"Aprender Vue","description":"Aprender Vue y testing en Vue","priority":"Hight","completed":false},{"todo":"Aprender Algun lenguaje para el backend","description":"Aprender backend: php, java y python","priority":"Medium","completed":false}]'
const InitialState:TodoSlice = {
  textInput: '',
  todos: JSON.parse(localStorage.getItem('todos') || initialTodos),
  todo: { 
    todo: '', 
    description: '',
    priority: null ,
    completed: false
  },
  todoSelected: { 
    todo: '', 
    description: '',
    priority: null ,
    completed: false
  },
}

export const todoSlice = createSlice({
  name: 'todoSlice',
  initialState: InitialState,
  reducers: {
    setTextInput: (state,action:{payload: string}) => {
      state.textInput = action.payload
    },
    setTodoInput: (state,action:{payload: todo}) => {
      state.todo = action.payload
    },
    setTodo: (state,action:{ payload: todo }) => {
      state.todos = [...state.todos,action.payload]
      localStorage.setItem('todos',JSON.stringify(state.todos))
    },
    setSelectTodo: (state,action:{ payload:todo }) => {
      state.todoSelected = action.payload
    },
    setCompleteTodo: (state,action:{ payload:todo }) => {
      const newTodos = [...state.todos]
      const newTodoI = state.todos.findIndex(todo => todo.todo === action.payload.todo)
      newTodos[newTodoI].completed = true
      state.todos = newTodos
      localStorage.setItem('todos',JSON.stringify(state.todos))
    }
  }
})

export const {setTextInput, setTodoInput, setTodo, setSelectTodo, setCompleteTodo} = todoSlice.actions
