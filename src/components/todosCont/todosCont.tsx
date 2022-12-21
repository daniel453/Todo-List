import React, { ReactElement } from 'react'
import { todo, TodoSlice, uiSliceI } from '../../models/InitialState.model'
import { AddTodo } from '../addTodo/addTodo'
import { SectionCont } from '../sectionCont/sectionCont'
import Buttons from '../buttons.tsx/buttons'
import { Modal } from '../modal/modal'
import { Sections } from '../sections/sections'
import './todosCont.css'

interface todoscont {
  todoState: TodoSlice,
  todosFilter: todo[],
  todosFilterCompleted: todo[],
  addTodo: (todo:todo) => void
  setselectTodo: (todo:todo) => void
  uiState: uiSliceI,
  toggleModalCreate: () => void,
  toggleModalTodoDetail: () => void,
  setSelection: (section:string) => void,
  changeTodo: (todo:todo) => void,
  completeTodo: (todo:todo) =>void
}

export const TodosCont = ({ 
  todoState, 
  todosFilter, 
  todosFilterCompleted,
  addTodo, 
  changeTodo,
  setselectTodo, 
  uiState, 
  toggleModalCreate, 
  toggleModalTodoDetail, 
  setSelection,
  completeTodo }:todoscont) => {
  const sections = ['All','Hight','Medium','Low']
  
  const buttonsModal = (isCompleted:boolean):ReactElement => {
    if(isCompleted) {
      return (
        <Buttons onClick={toggleModalTodoDetail} textButton='Cerrar' type='primary' />
      )
    }
    return (
      <Buttons onClick={completeTodo} valueToCallback={todoState.todoSelected} textButton='Completar' type='primary' />
    )
  }
  
  return (
    <main>
      <Sections 
        sections={sections} 
        sectionSelected={uiState.importancySelected} 
        setSelection={setSelection}
      />

      <SectionCont 
        todos={todosFilter}
        todosCompleted={todosFilterCompleted}
      />

      <AddTodo 
        changeTodo={changeTodo}
        todo={todoState.todo} 
        uiState={uiState} 
        toggleModal={toggleModalCreate} 
        addTodo={addTodo}
      />

      { 
        uiState.showModalTodoDetail
          ? <Modal
              title={todoState.todoSelected.todo}
              close_modal={toggleModalTodoDetail}
              btns_footer={() => buttonsModal(todoState.todoSelected.completed)}
            >
              <>
                <p><b>Prioridad: </b>{ todoState.todoSelected.priority }</p>
                <br/>
                <p><b>Descripción: </b>{ todoState.todoSelected.description }</p>
              </>
            </Modal>
          : null
      }
    </main>
  )
}