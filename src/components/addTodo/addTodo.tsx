import React, { useState } from 'react'
import { todo, uiSliceI } from '../../models/InitialState.model'
import Buttons from '../buttons.tsx/buttons'
import { DropDownList } from '../drop-down list/dropDownList'
import { InputText } from '../inputText/inputText'
import { Modal } from '../modal/modal'
import './addTodo.css'

interface addtodo {
  uiState: uiSliceI, 
  todo:todo,
  toggleModal: () => void,
  addTodo: (todo:todo) => void,
  changeTodo: (todo:todo) => void
}

export function AddTodo({ uiState, todo, toggleModal, addTodo, changeTodo }:addtodo) {
  const options = ['Hight','Medium','Low']

  const optionSelected = (option:string) => {
    let newTodo:todo
    if(option === 'Hight') newTodo = {...todo,priority: 'Hight'}
    else if(option === 'Medium') newTodo = {...todo,priority: 'Medium'}
    else newTodo = {...todo,priority: 'Low'}

    changeTodo(newTodo)
  }
  const textInInput = (text:string) => {
    changeTodo({ 
        todo: text,
        description: todo.description, 
        priority: todo.priority, 
        completed: false 
      })
  }
  const textInTextArea = (text:string) => {
    changeTodo({ 
      todo: todo.todo,
      description: text, 
      priority: todo.priority, 
      completed: false 
    })
  }
  return (
    <React.Fragment>
      <div className='addTodo__btn' onClick={toggleModal}>
      <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
        <path fill='#98b0d7' d="M22.5 38V25.5H10v-3h12.5V10h3v12.5H38v3H25.5V38Z"/>
      </svg>
      </div>
      
      { uiState.showModalCreate 
        ? <Modal
            title='Agregar tarea' 
            close_modal={toggleModal}
            btns_footer={() => <Buttons onClick={addTodo} valueToCallback={todo} type='primary' textButton='Agregar'/>}
          >
            <>
              <InputText 
                value={todo.todo} 
                type='text' 
                onChange={textInInput} 
                placeholder='Nombre del todo'
              />
              { uiState.errorsAddTodo.find(error => error.Type === 'inputText')?.error === true 
                  ? <p className='p_errors'>El input debe tener mas de 2 caracteres</p> 
                  : null
              }
              <br/>
              <DropDownList 
                onClick={optionSelected} 
                options={ options } 
                textInDropDown='Selecciona la prioridad'
              />
              { uiState.errorsAddTodo.find(error => error.Type === 'dropdown')?.error === true 
                  ? <p className='p_errors'>Selecciona una prioridad para el todo</p> 
                  : null
              }
              <br/>
              <textarea 
                className='addTodo__description' 
                cols={30} 
                rows={10}
                value={todo.description} 
                placeholder='Descripción del todo'
                onChange={e => textInTextArea(e.target.value)}>
              </textarea>
              { uiState.errorsAddTodo.find(error => error.Type === 'textArea')?.error === true 
                  ? <p className='p_errors'>La descripción no puede estar vacia</p> 
                  : null
              }
            </>
          </Modal> 
        : null 
      } 
    </React.Fragment>
  )
}
