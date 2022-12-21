import { useSelector,useDispatch } from 'react-redux'
import { errors, todo } from '../models/InitialState.model'
import { reducers } from '../reducers/rootReducers'
import { setSelectTodo, setTextInput,setTodo,setTodoInput, setCompleteTodo } from '../reducers/slices/todoSlice'
import { seterrorsAddTodo, setShowModalCreate, setShowModalTodoDetail } from '../reducers/slices/uiSlice'

export const useTodos = () => {
  const todoState = useSelector((state:reducers) => state.todoSlice)
  const importancySelected = useSelector((state:reducers) => state.uiSlices.importancySelected)
  const todosAll:todo[] = todoState.todos
  const dispatch = useDispatch()

  const completeTodo = (todo:todo) => {
    dispatch(setCompleteTodo(todo))
    dispatch(setShowModalTodoDetail(false))
  }

  const changeText = (text:string) => {
    dispatch(setTextInput(text))  
  }

  const changeTodo = (todo:todo) => {
    dispatch(setTodoInput(todo))
  }

  const addTodo = (todo:todo) => {
    let errors:[errors?,errors?,errors?] = []
    if(todo.todo.length < 2) {
      const error:errors = { Type: 'inputText' ,error: true}
      errors.push(error)
    }
    if(todo.description.length === 0) {
      const error:errors = { Type: 'textArea' ,error: true}
      errors.push(error)
    } 
    if(todo.priority === null) {
      const error:errors = { Type: 'dropdown' ,error: true}
      errors.push(error)
    }
    if(errors.length > 0) {
      dispatch(seterrorsAddTodo(errors))
    } else {
      dispatch(setTodo(todo))
      dispatch(seterrorsAddTodo([]))
      dispatch(setShowModalCreate(false))
    }
  }

  const removeTodo = () => {

  }

  const setselectTodo = (todo:todo) => {
    dispatch(setSelectTodo(todo))
  }
  const todosFilter = todosAll.filter(todo => {
    if(todoState.textInput.length > 1) {
      const textSearched = todoState.textInput.toLocaleLowerCase()
      const textTodo = todo.todo.toLocaleLowerCase()
      return textTodo.includes(textSearched)
    }
    if(importancySelected !== 'All') {
      return todo.priority == importancySelected
    }
    return true
  })
  const todosFilterCompleted = todosFilter.filter(todo => {
    if(todo.completed == true) return true
    return false
  })

  return {
    todoState,
    todosFilter,
    todosFilterCompleted,
    changeTodo,
    changeText,
    completeTodo,
    addTodo,
    removeTodo,
    setselectTodo
  }
}