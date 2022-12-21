import React from 'react'
import { IconDone } from './iconDone'
import './cardTodo.css'
import { todo } from '../../models/InitialState.model'

interface cardTodo {
  todo: todo,
  showModalTodoDetail: boolean,
  toggleModalTodoDetail: () => void,
  setselectTodo: (todo:todo) => void,
}

export const CardTodo = ({ todo, toggleModalTodoDetail, setselectTodo }:cardTodo) => {
  const selectTodo = () => {
    setselectTodo(todo)
    toggleModalTodoDetail()
  }
  
  return (
    <article className='cardTodo' onClick={selectTodo}>
      <div className='cardTodo__header'>
        <p className={`cardTodo__importance ${todo.priority}`}>{todo.priority}</p>
      </div>
      <div className='cardTodo__info'>
        { todo.completed ? <figure className='cardIcon'>{IconDone}</figure> : null }
        <p className='cardTodo__info__p'>{todo.todo}</p>
      </div>
    </article>
  )
}