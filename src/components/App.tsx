import React from 'react'
import { useTodos } from '../hooks/useTodos'
import { useUi } from '../hooks/useUi'
import { Header } from './header/header'
import { TodosCont } from './todosCont/todosCont'

export const App = () => {
  const {
    todoState,
    todosFilter,
    todosFilterCompleted,
    addTodo,
    setselectTodo,
    changeTodo,
    completeTodo
  } = useTodos()
  const {
    uiState,
    toggleModalCreate,
    toggleModalTodoDetail,
    setSelection
  } = useUi()

  return (
    <React.Fragment>
      <Header/>
      <TodosCont 
        todosFilterCompleted={todosFilterCompleted}
        completeTodo={completeTodo}
        todoState={todoState}
        todosFilter={todosFilter}
        addTodo={addTodo}
        changeTodo={changeTodo}
        setselectTodo={setselectTodo}
        uiState={uiState}
        toggleModalCreate={toggleModalCreate}
        toggleModalTodoDetail={toggleModalTodoDetail}
        setSelection={setSelection}
      />
    </React.Fragment>
  )
}