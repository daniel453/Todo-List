import React from 'react'
import { useTodos } from '../../hooks/useTodos'
import { useUi } from '../../hooks/useUi'
import { todo } from '../../models/InitialState.model'
import { CardTodo } from '../cardTodo/cardTodo'
import './sectionCont.css'
interface sectionCont {
  todosCompleted: todo[],
  todos: todo[],
}

export function SectionCont({ todosCompleted, todos }:sectionCont) {
  const {
    setselectTodo
  } = useTodos()
  const {
    toggleModalTodoDetail,
    uiState
  } = useUi()

  return (
    <section className='todoCont'>
        <h2>Completados { todos.length > 0 ? `${ todosCompleted.length } de ${ todos.length }` : null }</h2>
        <div className='todoCont_todos'>
          { todosCompleted.map((todo,i) => (
              <CardTodo 
                setselectTodo={setselectTodo}
                toggleModalTodoDetail={ toggleModalTodoDetail }
                showModalTodoDetail={uiState.showModalTodoDetail}
                key={`${todo.todo}&${todo.completed}${i}`} 
                todo={todo}
              />)) 
          }
          {
            todosCompleted.length == 0
              ? <p style={{color: '#6d7e99', fontWeight: 'bold'}}>No hay tareas completadas</p>
              : null
          }
        </div>
        <hr/>
        <div className='todoCont_todos'>
          { todos.map((todo,i) => (
              <CardTodo 
                setselectTodo={setselectTodo}
                toggleModalTodoDetail={ toggleModalTodoDetail }
                showModalTodoDetail={uiState.showModalTodoDetail}
                key={`${todo.todo}&${todo.completed}${i}`} 
                todo={todo}
              />)) 
          }
        </div>
      </section>
  )
}
